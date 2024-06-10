import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CuentaCorrienteServiceBase } from "./base/cuentaCorriente.service.base";

@Injectable()
export class CuentaCorrienteService extends CuentaCorrienteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
