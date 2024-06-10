import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CuentaCorrienteModuleBase } from "./base/cuentaCorriente.module.base";
import { CuentaCorrienteService } from "./cuentaCorriente.service";
import { CuentaCorrienteController } from "./cuentaCorriente.controller";
import { CuentaCorrienteResolver } from "./cuentaCorriente.resolver";

@Module({
  imports: [CuentaCorrienteModuleBase, forwardRef(() => AuthModule)],
  controllers: [CuentaCorrienteController],
  providers: [CuentaCorrienteService, CuentaCorrienteResolver],
  exports: [CuentaCorrienteService],
})
export class CuentaCorrienteModule {}
