import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PagoFacturaServiceBase } from "./base/pagoFactura.service.base";

@Injectable()
export class PagoFacturaService extends PagoFacturaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
