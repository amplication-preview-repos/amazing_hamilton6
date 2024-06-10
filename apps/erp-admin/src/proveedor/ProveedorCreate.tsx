import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProveedorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput label="run" source="run" />
      </SimpleForm>
    </Create>
  );
};
