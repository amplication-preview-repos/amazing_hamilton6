import { Arqueo as TArqueo } from "../api/arqueo/Arqueo";

export const ARQUEO_TITLE_FIELD = "cajera";

export const ArqueoTitle = (record: TArqueo): string => {
  return record.cajera?.toString() || String(record.id);
};
