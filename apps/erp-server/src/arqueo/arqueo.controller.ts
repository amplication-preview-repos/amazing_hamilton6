import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArqueoService } from "./arqueo.service";
import { ArqueoControllerBase } from "./base/arqueo.controller.base";

@swagger.ApiTags("arqueos")
@common.Controller("arqueos")
export class ArqueoController extends ArqueoControllerBase {
  constructor(
    protected readonly service: ArqueoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
