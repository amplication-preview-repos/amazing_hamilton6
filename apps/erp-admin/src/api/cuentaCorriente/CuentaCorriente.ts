export type CuentaCorriente = {
  createdAt: Date;
  fechaVencimiento: Date | null;
  folioFactura: string | null;
  id: string;
  monto: number | null;
  nombre: string | null;
  proveedor: string | null;
  run: string | null;
  updatedAt: Date;
};
