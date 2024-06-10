export type PagoFacturaUpdateInput = {
  fechaVencimiento?: Date | null;
  folioFactura?: string | null;
  montoFactura?: number | null;
  montoPagado?: number | null;
  nombreProveedor?: string | null;
  notificacionVencida?: boolean | null;
  pagado?: boolean | null;
  runProveedor?: string | null;
};
