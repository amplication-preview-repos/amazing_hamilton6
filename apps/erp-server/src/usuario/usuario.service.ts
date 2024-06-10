import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsuarioServiceBase } from "./base/usuario.service.base";

@Injectable()
export class UsuarioService extends UsuarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
