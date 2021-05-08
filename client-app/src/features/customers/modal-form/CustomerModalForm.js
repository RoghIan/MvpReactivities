import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

export default function CustomerModalForm(props) {
  const initialState = props.selectedCustomer ?? {
    id: "",
    name: "",
    address: "",
  };

  const [customer, setCustomer] = useState(initialState);

  function handleSubmit() {
    props.createOrEdit(customer);
    props.setOpenEditModal(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  }

  return (
    <Modal
      onClose={() => props.setOpenEditModal(false)}
      onOpen={() => props.setOpenEditModal(true)}
      open={props.openEditModal}
    >
      <Modal.Header>Update Customer Details</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Input
              placeholder="Name"
              value={customer.name}
              name="name"
              onChange={handleInputChange}
            />
            <Form.Input
              placeholder="Address"
              name="address"
              value={customer.address}
              onChange={handleInputChange}
            />
            <Button
              floated="right"
              content="Save"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              positive
            />
            <Button
              floated="right"
              color="black"
              onClick={() => props.setOpenEditModal(false)}
            >
              Nope
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
}
