import { SortOrder } from "../../util/SortOrder";

export type PagoFacturaOrderByInput = {
  createdAt?: SortOrder;
  fechaVencimiento?: SortOrder;
  folioFactura?: SortOrder;
  id?: SortOrder;
  montoFactura?: SortOrder;
  montoPagado?: SortOrder;
  nombreProveedor?: SortOrder;
  notificacionVencida?: SortOrder;
  pagado?: SortOrder;
  runProveedor?: SortOrder;
  updatedAt?: SortOrder;
};
