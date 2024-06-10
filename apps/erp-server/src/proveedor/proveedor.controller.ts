import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProveedorService } from "./proveedor.service";
import { ProveedorControllerBase } from "./base/proveedor.controller.base";

@swagger.ApiTags("proveedors")
@common.Controller("proveedors")
export class ProveedorController extends ProveedorControllerBase {
  constructor(
    protected readonly service: ProveedorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
