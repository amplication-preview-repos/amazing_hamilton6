import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UsuariosGestionService } from "./usuariosgestion.service";

@swagger.ApiTags("usuariosGestions")
@common.Controller("usuariosGestions")
export class UsuariosGestionController {
  constructor(protected readonly service: UsuariosGestionService) {}

  @common.Get("/:id/get-all-usuarios")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllUsuarios(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetAllUsuarios(body);
      }
}
