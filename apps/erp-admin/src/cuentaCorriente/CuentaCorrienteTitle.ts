import { CuentaCorriente as TCuentaCorriente } from "../api/cuentaCorriente/CuentaCorriente";

export const CUENTACORRIENTE_TITLE_FIELD = "folioFactura";

export const CuentaCorrienteTitle = (record: TCuentaCorriente): string => {
  return record.folioFactura?.toString() || String(record.id);
};
