import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PagoFacturaService } from "./pagoFactura.service";
import { PagoFacturaControllerBase } from "./base/pagoFactura.controller.base";

@swagger.ApiTags("pagoFacturas")
@common.Controller("pagoFacturas")
export class PagoFacturaController extends PagoFacturaControllerBase {
  constructor(
    protected readonly service: PagoFacturaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
