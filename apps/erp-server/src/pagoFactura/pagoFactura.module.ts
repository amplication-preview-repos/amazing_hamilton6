import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PagoFacturaModuleBase } from "./base/pagoFactura.module.base";
import { PagoFacturaService } from "./pagoFactura.service";
import { PagoFacturaController } from "./pagoFactura.controller";
import { PagoFacturaResolver } from "./pagoFactura.resolver";

@Module({
  imports: [PagoFacturaModuleBase, forwardRef(() => AuthModule)],
  controllers: [PagoFacturaController],
  providers: [PagoFacturaService, PagoFacturaResolver],
  exports: [PagoFacturaService],
})
export class PagoFacturaModule {}
