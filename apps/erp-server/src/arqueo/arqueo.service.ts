import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArqueoServiceBase } from "./base/arqueo.service.base";

@Injectable()
export class ArqueoService extends ArqueoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
