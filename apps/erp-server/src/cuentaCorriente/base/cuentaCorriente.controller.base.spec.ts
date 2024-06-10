import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CuentaCorrienteController } from "../cuentaCorriente.controller";
import { CuentaCorrienteService } from "../cuentaCorriente.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fechaVencimiento: new Date(),
  folioFactura: "exampleFolioFactura",
  id: "exampleId",
  monto: 42.42,
  nombre: "exampleNombre",
  proveedor: "exampleProveedor",
  run: "exampleRun",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fechaVencimiento: new Date(),
  folioFactura: "exampleFolioFactura",
  id: "exampleId",
  monto: 42.42,
  nombre: "exampleNombre",
  proveedor: "exampleProveedor",
  run: "exampleRun",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fechaVencimiento: new Date(),
    folioFactura: "exampleFolioFactura",
    id: "exampleId",
    monto: 42.42,
    nombre: "exampleNombre",
    proveedor: "exampleProveedor",
    run: "exampleRun",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fechaVencimiento: new Date(),
  folioFactura: "exampleFolioFactura",
  id: "exampleId",
  monto: 42.42,
  nombre: "exampleNombre",
  proveedor: "exampleProveedor",
  run: "exampleRun",
  updatedAt: new Date(),
};

const service = {
  createCuentaCorriente() {
    return CREATE_RESULT;
  },
  cuentaCorrientes: () => FIND_MANY_RESULT,
  cuentaCorriente: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CuentaCorriente", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CuentaCorrienteService,
          useValue: service,
        },
      ],
      controllers: [CuentaCorrienteController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /cuentaCorrientes", async () => {
    await request(app.getHttpServer())
      .post("/cuentaCorrientes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fechaVencimiento: CREATE_RESULT.fechaVencimiento.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cuentaCorrientes", async () => {
    await request(app.getHttpServer())
      .get("/cuentaCorrientes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fechaVencimiento: FIND_MANY_RESULT[0].fechaVencimiento.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cuentaCorrientes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cuentaCorrientes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cuentaCorrientes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cuentaCorrientes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fechaVencimiento: FIND_ONE_RESULT.fechaVencimiento.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cuentaCorrientes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cuentaCorrientes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fechaVencimiento: CREATE_RESULT.fechaVencimiento.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cuentaCorrientes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
