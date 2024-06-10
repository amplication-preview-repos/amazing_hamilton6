import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProveedorModuleBase } from "./base/proveedor.module.base";
import { ProveedorService } from "./proveedor.service";
import { ProveedorController } from "./proveedor.controller";
import { ProveedorResolver } from "./proveedor.resolver";

@Module({
  imports: [ProveedorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProveedorController],
  providers: [ProveedorService, ProveedorResolver],
  exports: [ProveedorService],
})
export class ProveedorModule {}
