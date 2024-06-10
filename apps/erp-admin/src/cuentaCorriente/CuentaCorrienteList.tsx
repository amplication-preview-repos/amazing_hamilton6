import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CuentaCorrienteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CuentaCorrientes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaVencimiento" source="fechaVencimiento" />
        <TextField label="folioFactura" source="folioFactura" />
        <TextField label="ID" source="id" />
        <TextField label="monto" source="monto" />
        <TextField label="nombre" source="nombre" />
        <TextField label="Proveedor" source="proveedor" />
        <TextField label="RUN" source="run" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
