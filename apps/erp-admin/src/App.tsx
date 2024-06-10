import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CuentaCorrienteList } from "./cuentaCorriente/CuentaCorrienteList";
import { CuentaCorrienteCreate } from "./cuentaCorriente/CuentaCorrienteCreate";
import { CuentaCorrienteEdit } from "./cuentaCorriente/CuentaCorrienteEdit";
import { CuentaCorrienteShow } from "./cuentaCorriente/CuentaCorrienteShow";
import { PagoFacturaList } from "./pagoFactura/PagoFacturaList";
import { PagoFacturaCreate } from "./pagoFactura/PagoFacturaCreate";
import { PagoFacturaEdit } from "./pagoFactura/PagoFacturaEdit";
import { PagoFacturaShow } from "./pagoFactura/PagoFacturaShow";
import { GastoList } from "./gasto/GastoList";
import { GastoCreate } from "./gasto/GastoCreate";
import { GastoEdit } from "./gasto/GastoEdit";
import { GastoShow } from "./gasto/GastoShow";
import { ArqueoList } from "./arqueo/ArqueoList";
import { ArqueoCreate } from "./arqueo/ArqueoCreate";
import { ArqueoEdit } from "./arqueo/ArqueoEdit";
import { ArqueoShow } from "./arqueo/ArqueoShow";
import { ProveedorList } from "./proveedor/ProveedorList";
import { ProveedorCreate } from "./proveedor/ProveedorCreate";
import { ProveedorEdit } from "./proveedor/ProveedorEdit";
import { ProveedorShow } from "./proveedor/ProveedorShow";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ERP"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CuentaCorriente"
          list={CuentaCorrienteList}
          edit={CuentaCorrienteEdit}
          create={CuentaCorrienteCreate}
          show={CuentaCorrienteShow}
        />
        <Resource
          name="PagoFactura"
          list={PagoFacturaList}
          edit={PagoFacturaEdit}
          create={PagoFacturaCreate}
          show={PagoFacturaShow}
        />
        <Resource
          name="Gasto"
          list={GastoList}
          edit={GastoEdit}
          create={GastoCreate}
          show={GastoShow}
        />
        <Resource
          name="Arqueo"
          list={ArqueoList}
          edit={ArqueoEdit}
          create={ArqueoCreate}
          show={ArqueoShow}
        />
        <Resource
          name="Proveedor"
          list={ProveedorList}
          edit={ProveedorEdit}
          create={ProveedorCreate}
          show={ProveedorShow}
        />
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
