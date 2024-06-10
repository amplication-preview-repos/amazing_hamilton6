import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PagoFacturaResolverBase } from "./base/pagoFactura.resolver.base";
import { PagoFactura } from "./base/PagoFactura";
import { PagoFacturaService } from "./pagoFactura.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PagoFactura)
export class PagoFacturaResolver extends PagoFacturaResolverBase {
  constructor(
    protected readonly service: PagoFacturaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
