import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import CustomerTable from "../../features/customers/table/CustomerTable";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/customer").then((response) => {
      setCustomers(response.data);
    });
  }, []);

  function handleSelectCustomer(id) {
    setSelectedCustomer(customers.find((x) => x.id === id));
  }

  function handleCancelSelectCustomer() {
    setSelectedCustomer(undefined);
    setOpenModal(false);
  }

  function handleCreateOrEditCustomer(customer) {
    customer.id
      ? setCustomers([
          ...customers.filter((x) => x.id !== customer.id),
          customer,
        ])
      : setCustomers([...customers, { ...customer, id: customers.length + 1 }]);
  }

  function handleDeleteCustomer(id) {
    setCustomers([...customers.filter((x) => x.id !== id)]);
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <CustomerTable
          selectedCustomer={selectedCustomer}
          selectCustomer={handleSelectCustomer}
          cancelSelectCustomer={handleCancelSelectCustomer}
          customers={customers}
          openModal={openModal}
          createOrEdit={handleCreateOrEditCustomer}
          deleteCustomer={handleDeleteCustomer}
        />
      </Container>
    </>
  );
}

export default App;
