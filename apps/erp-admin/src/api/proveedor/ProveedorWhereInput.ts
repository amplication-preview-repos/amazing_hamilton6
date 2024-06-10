import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProveedorWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  run?: StringNullableFilter;
};
