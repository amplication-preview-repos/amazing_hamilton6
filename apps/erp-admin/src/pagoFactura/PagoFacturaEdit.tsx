import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const PagoFacturaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
