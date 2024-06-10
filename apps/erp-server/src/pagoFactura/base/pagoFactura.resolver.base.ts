/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { PagoFactura } from "./PagoFactura";
import { PagoFacturaCountArgs } from "./PagoFacturaCountArgs";
import { PagoFacturaFindManyArgs } from "./PagoFacturaFindManyArgs";
import { PagoFacturaFindUniqueArgs } from "./PagoFacturaFindUniqueArgs";
import { CreatePagoFacturaArgs } from "./CreatePagoFacturaArgs";
import { UpdatePagoFacturaArgs } from "./UpdatePagoFacturaArgs";
import { DeletePagoFacturaArgs } from "./DeletePagoFacturaArgs";
import { PagoFacturaService } from "../pagoFactura.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PagoFactura)
export class PagoFacturaResolverBase {
  constructor(
    protected readonly service: PagoFacturaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PagoFactura",
    action: "read",
    possession: "any",
  })
  async _pagoFacturasMeta(
    @graphql.Args() args: PagoFacturaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PagoFactura])
  @nestAccessControl.UseRoles({
    resource: "PagoFactura",
    action: "read",
    possession: "any",
  })
  async pagoFacturas(
    @graphql.Args() args: PagoFacturaFindManyArgs
  ): Promise<PagoFactura[]> {
    return this.service.pagoFacturas(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PagoFactura, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PagoFactura",
    action: "read",
    possession: "own",
  })
  async pagoFactura(
    @graphql.Args() args: PagoFacturaFindUniqueArgs
  ): Promise<PagoFactura | null> {
    const result = await this.service.pagoFactura(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PagoFactura)
  @nestAccessControl.UseRoles({
    resource: "PagoFactura",
    action: "create",
    possession: "any",
  })
  async createPagoFactura(
    @graphql.Args() args: CreatePagoFacturaArgs
  ): Promise<PagoFactura> {
    return await this.service.createPagoFactura({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PagoFactura)
  @nestAccessControl.UseRoles({
    resource: "PagoFactura",
    action: "update",
    possession: "any",
  })
  async updatePagoFactura(
    @graphql.Args() args: UpdatePagoFacturaArgs
  ): Promise<PagoFactura | null> {
    try {
      return await this.service.updatePagoFactura({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PagoFactura)
  @nestAccessControl.UseRoles({
    resource: "PagoFactura",
    action: "delete",
    possession: "any",
  })
  async deletePagoFactura(
    @graphql.Args() args: DeletePagoFacturaArgs
  ): Promise<PagoFactura | null> {
    try {
      return await this.service.deletePagoFactura(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
