import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CuentaCorrienteWhereInput = {
  fechaVencimiento?: DateTimeNullableFilter;
  folioFactura?: StringNullableFilter;
  id?: StringFilter;
  monto?: FloatNullableFilter;
  nombre?: StringNullableFilter;
  proveedor?: StringNullableFilter;
  run?: StringNullableFilter;
};
