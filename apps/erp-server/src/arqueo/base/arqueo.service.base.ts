/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Arqueo as PrismaArqueo } from "@prisma/client";

export class ArqueoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ArqueoCountArgs, "select">): Promise<number> {
    return this.prisma.arqueo.count(args);
  }

  async arqueos<T extends Prisma.ArqueoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArqueoFindManyArgs>
  ): Promise<PrismaArqueo[]> {
    return this.prisma.arqueo.findMany<Prisma.ArqueoFindManyArgs>(args);
  }
  async arqueo<T extends Prisma.ArqueoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArqueoFindUniqueArgs>
  ): Promise<PrismaArqueo | null> {
    return this.prisma.arqueo.findUnique(args);
  }
  async createArqueo<T extends Prisma.ArqueoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArqueoCreateArgs>
  ): Promise<PrismaArqueo> {
    return this.prisma.arqueo.create<T>(args);
  }
  async updateArqueo<T extends Prisma.ArqueoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArqueoUpdateArgs>
  ): Promise<PrismaArqueo> {
    return this.prisma.arqueo.update<T>(args);
  }
  async deleteArqueo<T extends Prisma.ArqueoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArqueoDeleteArgs>
  ): Promise<PrismaArqueo> {
    return this.prisma.arqueo.delete(args);
  }
}
