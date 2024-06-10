export type PagoFactura = {
  createdAt: Date;
  fechaVencimiento: Date | null;
  folioFactura: string | null;
  id: string;
  montoFactura: number | null;
  montoPagado: number | null;
  nombreProveedor: string | null;
  notificacionVencida: boolean | null;
  pagado: boolean | null;
  runProveedor: string | null;
  updatedAt: Date;
};
