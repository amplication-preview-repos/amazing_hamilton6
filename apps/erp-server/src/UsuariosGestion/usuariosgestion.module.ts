import { Module } from "@nestjs/common";
import { UsuariosGestionService } from "./usuariosgestion.service";
import { UsuariosGestionController } from "./usuariosgestion.controller";
import { UsuariosGestionResolver } from "./usuariosgestion.resolver";

@Module({
  controllers: [UsuariosGestionController],
  providers: [UsuariosGestionService, UsuariosGestionResolver],
  exports: [UsuariosGestionService],
})
export class UsuariosGestionModule {}
