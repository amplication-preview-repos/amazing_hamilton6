import { PagoFactura as TPagoFactura } from "../api/pagoFactura/PagoFactura";

export const PAGOFACTURA_TITLE_FIELD = "folioFactura";

export const PagoFacturaTitle = (record: TPagoFactura): string => {
  return record.folioFactura?.toString() || String(record.id);
};
