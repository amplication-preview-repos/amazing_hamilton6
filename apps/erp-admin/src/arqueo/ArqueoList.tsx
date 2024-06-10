import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArqueoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Arqueos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cajera" source="cajera" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaArqueo" source="fechaArqueo" />
        <TextField label="ID" source="id" />
        <TextField label="monto" source="monto" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
