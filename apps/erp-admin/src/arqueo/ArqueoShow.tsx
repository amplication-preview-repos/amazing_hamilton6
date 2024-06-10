import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ArqueoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cajera" source="cajera" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaArqueo" source="fechaArqueo" />
        <TextField label="ID" source="id" />
        <TextField label="monto" source="monto" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
