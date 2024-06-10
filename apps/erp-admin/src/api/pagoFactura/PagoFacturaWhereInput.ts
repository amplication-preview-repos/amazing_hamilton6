import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PagoFacturaWhereInput = {
  fechaVencimiento?: DateTimeNullableFilter;
  folioFactura?: StringNullableFilter;
  id?: StringFilter;
  montoFactura?: FloatNullableFilter;
  montoPagado?: FloatNullableFilter;
  nombreProveedor?: StringNullableFilter;
  notificacionVencida?: BooleanNullableFilter;
  pagado?: BooleanNullableFilter;
  runProveedor?: StringNullableFilter;
};
