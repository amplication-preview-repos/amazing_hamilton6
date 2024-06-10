import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CuentaCorrienteResolverBase } from "./base/cuentaCorriente.resolver.base";
import { CuentaCorriente } from "./base/CuentaCorriente";
import { CuentaCorrienteService } from "./cuentaCorriente.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CuentaCorriente)
export class CuentaCorrienteResolver extends CuentaCorrienteResolverBase {
  constructor(
    protected readonly service: CuentaCorrienteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
