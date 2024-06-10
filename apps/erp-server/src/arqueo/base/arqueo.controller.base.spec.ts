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
import { ArqueoController } from "../arqueo.controller";
import { ArqueoService } from "../arqueo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cajera: "exampleCajera",
  createdAt: new Date(),
  fechaArqueo: new Date(),
  id: "exampleId",
  monto: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cajera: "exampleCajera",
  createdAt: new Date(),
  fechaArqueo: new Date(),
  id: "exampleId",
  monto: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cajera: "exampleCajera",
    createdAt: new Date(),
    fechaArqueo: new Date(),
    id: "exampleId",
    monto: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cajera: "exampleCajera",
  createdAt: new Date(),
  fechaArqueo: new Date(),
  id: "exampleId",
  monto: 42.42,
  updatedAt: new Date(),
};

const service = {
  createArqueo() {
    return CREATE_RESULT;
  },
  arqueos: () => FIND_MANY_RESULT,
  arqueo: ({ where }: { where: { id: string } }) => {
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

describe("Arqueo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ArqueoService,
          useValue: service,
        },
      ],
      controllers: [ArqueoController],
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

  test("POST /arqueos", async () => {
    await request(app.getHttpServer())
      .post("/arqueos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fechaArqueo: CREATE_RESULT.fechaArqueo.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /arqueos", async () => {
    await request(app.getHttpServer())
      .get("/arqueos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fechaArqueo: FIND_MANY_RESULT[0].fechaArqueo.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /arqueos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arqueos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /arqueos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arqueos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fechaArqueo: FIND_ONE_RESULT.fechaArqueo.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /arqueos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/arqueos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fechaArqueo: CREATE_RESULT.fechaArqueo.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/arqueos")
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
