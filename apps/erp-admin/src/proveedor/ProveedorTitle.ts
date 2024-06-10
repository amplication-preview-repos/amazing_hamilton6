import { Proveedor as TProveedor } from "../api/proveedor/Proveedor";

export const PROVEEDOR_TITLE_FIELD = "nombre";

export const ProveedorTitle = (record: TProveedor): string => {
  return record.nombre?.toString() || String(record.id);
};
