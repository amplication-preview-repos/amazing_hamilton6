import { SortOrder } from "../../util/SortOrder";

export type CuentaCorrienteOrderByInput = {
  createdAt?: SortOrder;
  fechaVencimiento?: SortOrder;
  folioFactura?: SortOrder;
  id?: SortOrder;
  monto?: SortOrder;
  nombre?: SortOrder;
  proveedor?: SortOrder;
  run?: SortOrder;
  updatedAt?: SortOrder;
};
