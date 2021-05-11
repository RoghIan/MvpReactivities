import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

export default function StoreModalForm(props) {
  const initialState = props.selectedStore ?? {
    id: "",
    name: "",
    address: "",
  };

  const [store, setStore] = useState(initialState);

  function handleSubmit() {
    props.createOrEdit(store);
    props.setOpenEditModal(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setStore({ ...store, [name]: value });
  }

  return (
    <Modal
      onClose={() => props.setOpenEditModal(false)}
      onOpen={() => props.setOpenEditModal(true)}
      open={props.openEditModal}
    >
      <Modal.Header>Update Store Details</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Input
              placeholder="Name"
              value={store.name}
              name="name"
              onChange={handleInputChange}
            />
            <Form.Input
              placeholder="Address"
              name="address"
              value={store.address}
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
