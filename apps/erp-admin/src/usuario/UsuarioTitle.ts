import { Usuario as TUsuario } from "../api/usuario/Usuario";

export const USUARIO_TITLE_FIELD = "username";

export const UsuarioTitle = (record: TUsuario): string => {
  return record.username?.toString() || String(record.id);
};
