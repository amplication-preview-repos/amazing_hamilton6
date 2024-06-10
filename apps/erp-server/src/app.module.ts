import { Module } from "@nestjs/common";
import { CuentaCorrienteModule } from "./cuentaCorriente/cuentaCorriente.module";
import { PagoFacturaModule } from "./pagoFactura/pagoFactura.module";
import { GastoModule } from "./gasto/gasto.module";
import { ArqueoModule } from "./arqueo/arqueo.module";
import { ProveedorModule } from "./proveedor/proveedor.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { UserModule } from "./user/user.module";
import { InformesModule } from "./Informes/informes.module";
import { UsuariosGestionModule } from "./UsuariosGestion/usuariosgestion.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    CuentaCorrienteModule,
    PagoFacturaModule,
    GastoModule,
    ArqueoModule,
    ProveedorModule,
    UsuarioModule,
    UserModule,
    InformesModule,
    UsuariosGestionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
