import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArqueoModuleBase } from "./base/arqueo.module.base";
import { ArqueoService } from "./arqueo.service";
import { ArqueoController } from "./arqueo.controller";
import { ArqueoResolver } from "./arqueo.resolver";

@Module({
  imports: [ArqueoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArqueoController],
  providers: [ArqueoService, ArqueoResolver],
  exports: [ArqueoService],
})
export class ArqueoModule {}
