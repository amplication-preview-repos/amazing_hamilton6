import { GastoWhereInput } from "./GastoWhereInput";
import { GastoOrderByInput } from "./GastoOrderByInput";

export type GastoFindManyArgs = {
  where?: GastoWhereInput;
  orderBy?: Array<GastoOrderByInput>;
  skip?: number;
  take?: number;
};
