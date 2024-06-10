import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsuarioModuleBase } from "./base/usuario.module.base";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { UsuarioResolver } from "./usuario.resolver";

@Module({
  imports: [UsuarioModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioResolver],
  exports: [UsuarioService],
})
export class UsuarioModule {}
