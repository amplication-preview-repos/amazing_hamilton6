import { PagoFacturaWhereInput } from "./PagoFacturaWhereInput";
import { PagoFacturaOrderByInput } from "./PagoFacturaOrderByInput";

export type PagoFacturaFindManyArgs = {
  where?: PagoFacturaWhereInput;
  orderBy?: Array<PagoFacturaOrderByInput>;
  skip?: number;
  take?: number;
};
