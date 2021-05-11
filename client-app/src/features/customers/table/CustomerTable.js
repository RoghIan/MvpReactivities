import { Table, Button, Icon } from "semantic-ui-react";
import CustomerModalForm from "../modal-form/CustomerModalForm";
import DeleteConfirmationModal from "../modal-form/DeleteConfirmationModal";
import React, { useEffect, useState } from "react";
import agent from "../../../app/api/agent";

export default function CustomerTable() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

  function deleteSelectedCustomer(customer) {
    handleSelectCustomer(customer ? customer.id : 0);
    setOpenDeleteConfirmationModal(true);
  }

  function editSelectedCustomer(customer) {
    handleSelectCustomer(customer ? customer.id : 0);
    setOpenEditModal(true);
  }

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(undefined);

  useEffect(() => {
    agent.Customers.list().then((response) => {
      setCustomers(response);
    });
  }, []);

  function handleSelectCustomer(id) {
    setSelectedCustomer(customers.find((x) => x.id === id));
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
      setOpenDeleteConfirmationModal(false);
      setCustomers([...customers.filter((x) => x.id !== id)]);
    });
  }

  return (
    <>
      <Button
        positive
        content="Create Customer"
        onClick={() => editSelectedCustomer(undefined)}
      />

      {openEditModal && (
        <CustomerModalForm
          setOpenEditModal={setOpenEditModal}
          openEditModal={openEditModal}
          selectedCustomer={selectedCustomer}
          createOrEdit={handleCreateOrEditCustomer}
        />
      )}

      {openDeleteConfirmationModal && (
        <DeleteConfirmationModal
          setOpenDeleteConfirmationModal={setOpenDeleteConfirmationModal}
          openDeleteConfirmationModal={openDeleteConfirmationModal}
          selectedCustomer={selectedCustomer}
          deleteSales={handleDeleteCustomer}
        />
      )}

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customers.map((customer) => (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.name}</Table.Cell>
              <Table.Cell>{customer.address}</Table.Cell>
              <Table.Cell>
                <Button
                  color="yellow"
                  onClick={() => editSelectedCustomer(customer)}
                >
                  <Icon name="edit" />
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  color="red"
                  onClick={() => deleteSelectedCustomer(customer)}
                >
                  <Icon name="trash" />
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
