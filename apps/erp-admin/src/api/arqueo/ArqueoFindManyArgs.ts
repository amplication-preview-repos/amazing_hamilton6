import { ArqueoWhereInput } from "./ArqueoWhereInput";
import { ArqueoOrderByInput } from "./ArqueoOrderByInput";

export type ArqueoFindManyArgs = {
  where?: ArqueoWhereInput;
  orderBy?: Array<ArqueoOrderByInput>;
  skip?: number;
  take?: number;
};
