import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GastoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="descripcion" source="descripcion" />
        <NumberInput label="monto" source="monto" />
      </SimpleForm>
    </Create>
  );
};
