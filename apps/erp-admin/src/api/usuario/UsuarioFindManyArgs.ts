import { UsuarioWhereInput } from "./UsuarioWhereInput";
import { UsuarioOrderByInput } from "./UsuarioOrderByInput";

export type UsuarioFindManyArgs = {
  where?: UsuarioWhereInput;
  orderBy?: Array<UsuarioOrderByInput>;
  skip?: number;
  take?: number;
};
