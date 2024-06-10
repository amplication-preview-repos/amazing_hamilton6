import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsuarioService } from "./usuario.service";
import { UsuarioControllerBase } from "./base/usuario.controller.base";

@swagger.ApiTags("usuarios")
@common.Controller("usuarios")
export class UsuarioController extends UsuarioControllerBase {
  constructor(
    protected readonly service: UsuarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
