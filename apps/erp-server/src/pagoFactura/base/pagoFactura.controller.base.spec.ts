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
import { PagoFacturaController } from "../pagoFactura.controller";
import { PagoFacturaService } from "../pagoFactura.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fechaVencimiento: new Date(),
  folioFactura: "exampleFolioFactura",
  id: "exampleId",
  montoFactura: 42.42,
  montoPagado: 42.42,
  nombreProveedor: "exampleNombreProveedor",
  notificacionVencida: "true",
  pagado: "true",
  runProveedor: "exampleRunProveedor",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fechaVencimiento: new Date(),
  folioFactura: "exampleFolioFactura",
  id: "exampleId",
  montoFactura: 42.42,
  montoPagado: 42.42,
  nombreProveedor: "exampleNombreProveedor",
  notificacionVencida: "true",
  pagado: "true",
  runProveedor: "exampleRunProveedor",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fechaVencimiento: new Date(),
    folioFactura: "exampleFolioFactura",
    id: "exampleId",
    montoFactura: 42.42,
    montoPagado: 42.42,
    nombreProveedor: "exampleNombreProveedor",
    notificacionVencida: "true",
    pagado: "true",
    runProveedor: "exampleRunProveedor",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fechaVencimiento: new Date(),
  folioFactura: "exampleFolioFactura",
  id: "exampleId",
  montoFactura: 42.42,
  montoPagado: 42.42,
  nombreProveedor: "exampleNombreProveedor",
  notificacionVencida: "true",
  pagado: "true",
  runProveedor: "exampleRunProveedor",
  updatedAt: new Date(),
};

const service = {
  createPagoFactura() {
    return CREATE_RESULT;
  },
  pagoFacturas: () => FIND_MANY_RESULT,
  pagoFactura: ({ where }: { where: { id: string } }) => {
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

describe("PagoFactura", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PagoFacturaService,
          useValue: service,
        },
      ],
      controllers: [PagoFacturaController],
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

  test("POST /pagoFacturas", async () => {
    await request(app.getHttpServer())
      .post("/pagoFacturas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fechaVencimiento: CREATE_RESULT.fechaVencimiento.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /pagoFacturas", async () => {
    await request(app.getHttpServer())
      .get("/pagoFacturas")
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

  test("GET /pagoFacturas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pagoFacturas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /pagoFacturas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pagoFacturas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fechaVencimiento: FIND_ONE_RESULT.fechaVencimiento.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /pagoFacturas existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/pagoFacturas")
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
          .post("/pagoFacturas")
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
