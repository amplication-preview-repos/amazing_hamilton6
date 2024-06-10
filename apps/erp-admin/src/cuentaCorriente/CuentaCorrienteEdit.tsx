import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const CuentaCorrienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="fechaVencimiento" source="fechaVencimiento" />
        <TextInput label="folioFactura" source="folioFactura" />
        <NumberInput label="monto" source="monto" />
        <TextInput label="nombre" source="nombre" />
        <TextInput label="Proveedor" source="proveedor" />
        <TextInput label="RUN" source="run" />
      </SimpleForm>
    </Edit>
  );
};
