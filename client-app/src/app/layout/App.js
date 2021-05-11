import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import React from "react";
import { Route } from "react-router";
import ProductTable from "../../features/products/table/ProductTable";
import CustomerTable from "../../features/customers/table/CustomerTable";
import StoreTable from "../../features/stores/table/StoreTable";
import SaleTable from "../../features/sales/table/SalesTable";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route path="/customers" component={CustomerTable} />
        <Route path="/products" component={ProductTable} />
        <Route path="/stores" component={StoreTable} />
        <Route path="/sales" component={SaleTable} />
      </Container>
    </>
  );
}

export default App;
