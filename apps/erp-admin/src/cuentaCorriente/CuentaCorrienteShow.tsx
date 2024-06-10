import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CuentaCorrienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaVencimiento" source="fechaVencimiento" />
        <TextField label="folioFactura" source="folioFactura" />
        <TextField label="ID" source="id" />
        <TextField label="monto" source="monto" />
        <TextField label="nombre" source="nombre" />
        <TextField label="Proveedor" source="proveedor" />
        <TextField label="RUN" source="run" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
