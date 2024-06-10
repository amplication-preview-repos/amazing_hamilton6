import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuariosGestionService {
  constructor() {}
  async GetAllUsuarios(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
