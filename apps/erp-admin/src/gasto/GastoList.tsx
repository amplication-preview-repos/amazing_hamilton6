import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GastoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Gastos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="monto" source="monto" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
