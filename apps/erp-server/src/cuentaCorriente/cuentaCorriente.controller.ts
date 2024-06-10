import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CuentaCorrienteService } from "./cuentaCorriente.service";
import { CuentaCorrienteControllerBase } from "./base/cuentaCorriente.controller.base";

@swagger.ApiTags("cuentaCorrientes")
@common.Controller("cuentaCorrientes")
export class CuentaCorrienteController extends CuentaCorrienteControllerBase {
  constructor(
    protected readonly service: CuentaCorrienteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
