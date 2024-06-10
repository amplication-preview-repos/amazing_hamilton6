import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GastoServiceBase } from "./base/gasto.service.base";

@Injectable()
export class GastoService extends GastoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
