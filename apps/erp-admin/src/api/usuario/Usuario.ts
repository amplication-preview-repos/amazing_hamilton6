export type Usuario = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  roles?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
