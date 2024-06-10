import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PagoFacturaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PagoFacturas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
