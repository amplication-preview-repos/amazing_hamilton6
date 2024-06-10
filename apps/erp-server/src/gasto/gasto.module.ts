import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GastoModuleBase } from "./base/gasto.module.base";
import { GastoService } from "./gasto.service";
import { GastoController } from "./gasto.controller";
import { GastoResolver } from "./gasto.resolver";

@Module({
  imports: [GastoModuleBase, forwardRef(() => AuthModule)],
  controllers: [GastoController],
  providers: [GastoService, GastoResolver],
  exports: [GastoService],
})
export class GastoModule {}
