import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const CuentaCorrienteCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="fechaVencimiento" source="fechaVencimiento" />
        <TextInput label="folioFactura" source="folioFactura" />
        <NumberInput label="monto" source="monto" />
        <TextInput label="nombre" source="nombre" />
        <TextInput label="Proveedor" source="proveedor" />
        <TextInput label="RUN" source="run" />
      </SimpleForm>
    </Create>
  );
};
