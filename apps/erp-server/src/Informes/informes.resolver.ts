import * as graphql from "@nestjs/graphql";
import { CashRegisterSummaryDto } from "../informes/CashRegisterSummaryDto";
import { ExpenseReportDto } from "../informes/ExpenseReportDto";
import { InvoiceReportDto } from "../informes/InvoiceReportDto";
import { InformesService } from "./informes.service";

export class InformesResolver {
  constructor(protected readonly service: InformesService) {}

  @graphql.Query(() => CashRegisterSummaryDto)
  async GenerateCashRegisterSummary(
    @graphql.Args()
    args: CashRegisterSummaryDto
  ): Promise<CashRegisterSummaryDto> {
    return this.service.GenerateCashRegisterSummary(args);
  }

  @graphql.Query(() => ExpenseReportDto)
  async GenerateDailyMonthlyExpenseReport(
    @graphql.Args()
    args: ExpenseReportDto
  ): Promise<ExpenseReportDto> {
    return this.service.GenerateDailyMonthlyExpenseReport(args);
  }

  @graphql.Query(() => InvoiceReportDto)
  async GenerateDueUnpaidInvoicesReport(
    @graphql.Args()
    args: InvoiceReportDto
  ): Promise<InvoiceReportDto> {
    return this.service.GenerateDueUnpaidInvoicesReport(args);
  }

  @graphql.Query(() => String)
  async GetAllUsuarios(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetAllUsuarios(args);
  }

  @graphql.Query(() => String)
  async GetAllUsuariosAdmin(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetAllUsuariosAdmin(args);
  }
}
