import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GastoService } from "./gasto.service";
import { GastoControllerBase } from "./base/gasto.controller.base";

@swagger.ApiTags("gastos")
@common.Controller("gastos")
export class GastoController extends GastoControllerBase {
  constructor(
    protected readonly service: GastoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
