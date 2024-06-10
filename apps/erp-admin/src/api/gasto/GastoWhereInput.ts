import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GastoWhereInput = {
  descripcion?: StringNullableFilter;
  id?: StringFilter;
  monto?: FloatNullableFilter;
};
