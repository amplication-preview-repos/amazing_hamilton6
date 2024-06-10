import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ArqueoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cajera" source="cajera" />
        <DateTimeInput label="fechaArqueo" source="fechaArqueo" />
        <NumberInput label="monto" source="monto" />
      </SimpleForm>
    </Edit>
  );
};
