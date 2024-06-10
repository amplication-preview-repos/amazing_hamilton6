import { Module } from "@nestjs/common";
import { InformesService } from "./informes.service";
import { InformesController } from "./informes.controller";
import { InformesResolver } from "./informes.resolver";

@Module({
  controllers: [InformesController],
  providers: [InformesService, InformesResolver],
  exports: [InformesService],
})
export class InformesModule {}
