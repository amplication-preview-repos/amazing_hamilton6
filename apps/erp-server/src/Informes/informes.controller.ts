import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InformesService } from "./informes.service";
import { CashRegisterSummaryDto } from "../informes/CashRegisterSummaryDto";
import { ExpenseReportDto } from "../informes/ExpenseReportDto";
import { InvoiceReportDto } from "../informes/InvoiceReportDto";

@swagger.ApiTags("informes")
@common.Controller("informes")
export class InformesController {
  constructor(protected readonly service: InformesService) {}

  @common.Get("/recuento-cajas")
  @swagger.ApiOkResponse({
    type: CashRegisterSummaryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateCashRegisterSummary(
    @common.Body()
    body: string
  ): Promise<CashRegisterSummaryDto> {
        return this.service.GenerateCashRegisterSummary(body);
      }

  @common.Get("/gastos-diarios-mensuales")
  @swagger.ApiOkResponse({
    type: ExpenseReportDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateDailyMonthlyExpenseReport(
    @common.Body()
    body: string
  ): Promise<ExpenseReportDto> {
        return this.service.GenerateDailyMonthlyExpenseReport(body);
      }

  @common.Get("/facturas-por-vencer-impagas")
  @swagger.ApiOkResponse({
    type: InvoiceReportDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateDueUnpaidInvoicesReport(
    @common.Body()
    body: string
  ): Promise<InvoiceReportDto> {
        return this.service.GenerateDueUnpaidInvoicesReport(body);
      }

  @common.Get("/:id/get-all-usuarios")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllUsuarios(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetAllUsuarios(body);
      }

  @common.Get("/:id/get-all-usuarios-admin")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllUsuariosAdmin(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetAllUsuariosAdmin(body);
      }
}
