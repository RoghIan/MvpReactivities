import { Table, Button, Icon } from "semantic-ui-react";
import CustomerModalForm from "../modal-form/CustomerModalForm";
import React, { useState } from "react";

export default function CustomerTable(props) {
  const [openEditModal, setOpenEditModal] = useState(false);

  function editSelectedCustomer(customer) {
    props.selectCustomer(customer ? customer.id : 0);
    setOpenEditModal(true);
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
          selectedCustomer={props.selectedCustomer}
          selectCustomer={props.selectCustomer}
          cancelSelectCustomer={props.cancelSelectCustomer}
          createOrEdit={props.createOrEdit}
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
          {props.customers.map((customer) => (
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
                  onClick={() => props.deleteCustomer(customer.id)}
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
