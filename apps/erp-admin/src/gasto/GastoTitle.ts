import { Gasto as TGasto } from "../api/gasto/Gasto";

export const GASTO_TITLE_FIELD = "descripcion";

export const GastoTitle = (record: TGasto): string => {
  return record.descripcion?.toString() || String(record.id);
};
