import { registerEnumType } from "@nestjs/graphql";

export enum Roles {
    UsuarioFactura = "UsuarioFactura",
    UsuarioPago = "UsuarioPago",
    UsuarioArqueo = "UsuarioArqueo",
    UsuarioAdmin = "UsuarioAdmin"
}

registerEnumType(Roles, {
    name: "Roles",
  });