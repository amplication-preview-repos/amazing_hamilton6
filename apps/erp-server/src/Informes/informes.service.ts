import { Injectable } from "@nestjs/common";
import { CashRegisterSummaryDto } from "../informes/CashRegisterSummaryDto";
import { ExpenseReportDto } from "../informes/ExpenseReportDto";
import { InvoiceReportDto } from "../informes/InvoiceReportDto";

@Injectable()
export class InformesService {
  constructor() {}
  async GenerateCashRegisterSummary(args: CashRegisterSummaryDto): Promise<CashRegisterSummaryDto> {
    throw new Error("Not implemented");
  }
  async GenerateDailyMonthlyExpenseReport(args: ExpenseReportDto): Promise<ExpenseReportDto> {
    throw new Error("Not implemented");
  }
  async GenerateDueUnpaidInvoicesReport(args: InvoiceReportDto): Promise<InvoiceReportDto> {
    throw new Error("Not implemented");
  }
  async GetAllUsuarios(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetAllUsuariosAdmin(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
