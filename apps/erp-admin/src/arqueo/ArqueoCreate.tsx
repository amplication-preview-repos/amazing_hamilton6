import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ArqueoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cajera" source="cajera" />
        <DateTimeInput label="fechaArqueo" source="fechaArqueo" />
        <NumberInput label="monto" source="monto" />
      </SimpleForm>
    </Create>
  );
};
