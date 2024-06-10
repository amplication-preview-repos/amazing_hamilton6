import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const PagoFacturaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="fechaVencimiento" source="fechaVencimiento" />
        <TextInput label="folioFactura" source="folioFactura" />
        <NumberInput label="montoFactura" source="montoFactura" />
        <NumberInput label="montoPagado" source="montoPagado" />
        <TextInput label="NombreProveedor" source="nombreProveedor" />
        <BooleanInput
          label="notificacionVencida"
          source="notificacionVencida"
        />
        <BooleanInput label="pagado" source="pagado" />
        <TextInput label="RUNProveedor" source="runProveedor" />
      </SimpleForm>
    </Create>
  );
};
