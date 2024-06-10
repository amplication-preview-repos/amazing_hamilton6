import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GastoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="descripcion" source="descripcion" />
        <NumberInput label="monto" source="monto" />
      </SimpleForm>
    </Edit>
  );
};
