import { SortOrder } from "../../util/SortOrder";

export type GastoOrderByInput = {
  createdAt?: SortOrder;
  descripcion?: SortOrder;
  id?: SortOrder;
  monto?: SortOrder;
  updatedAt?: SortOrder;
};
