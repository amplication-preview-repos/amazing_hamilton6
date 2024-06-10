import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ArqueoWhereInput = {
  cajera?: StringNullableFilter;
  fechaArqueo?: DateTimeNullableFilter;
  id?: StringFilter;
  monto?: FloatNullableFilter;
};
