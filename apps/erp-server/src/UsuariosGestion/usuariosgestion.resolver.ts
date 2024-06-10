import * as graphql from "@nestjs/graphql";
import { UsuariosGestionService } from "./usuariosgestion.service";

export class UsuariosGestionResolver {
  constructor(protected readonly service: UsuariosGestionService) {}

  @graphql.Query(() => String)
  async GetAllUsuarios(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetAllUsuarios(args);
  }
}
