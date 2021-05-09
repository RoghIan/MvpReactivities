import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import CustomerTable from "../../features/customers/table/CustomerTable";
import React, { useEffect, useState } from "react";
import agent from "../api/agent";

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    agent.Customers.list().then((response) => {
      setCustomers(response);
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
    if (customer.id) {
      agent.Customers.update(customer).then(() => {
        setCustomers([
          ...customers.filter((x) => x.id !== customer.id),
          customer,
        ]);
      });
    } else {
      customer.id = 0;
      agent.Customers.create(customer).then(() => {
        setCustomers([...customers, { ...customer, customer }]);
      });
    }
  }

  function handleDeleteCustomer(id) {
    agent.Customers.del(id).then(() => {
      setCustomers([...customers.filter((x) => x.id !== id)]);
    });
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
