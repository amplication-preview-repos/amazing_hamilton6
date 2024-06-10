import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const PagoFacturaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaVencimiento" source="fechaVencimiento" />
        <TextField label="folioFactura" source="folioFactura" />
        <TextField label="ID" source="id" />
        <TextField label="montoFactura" source="montoFactura" />
        <TextField label="montoPagado" source="montoPagado" />
        <TextField label="NombreProveedor" source="nombreProveedor" />
        <BooleanField
          label="notificacionVencida"
          source="notificacionVencida"
        />
        <BooleanField label="pagado" source="pagado" />
        <TextField label="RUNProveedor" source="runProveedor" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
