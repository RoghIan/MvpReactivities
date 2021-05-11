import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

export default function ProductModalForm(props) {
  const initialState = props.selectedProduct ?? {
    id: "",
    name: "",
    price: "",
  };

  const [product, setProduct] = useState(initialState);

  function handleSubmit() {
    props.createOrEdit(product);
    props.setOpenEditModal(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  return (
    <Modal
      onClose={() => props.setOpenEditModal(false)}
      onOpen={() => props.setOpenEditModal(true)}
      open={props.openEditModal}
    >
      <Modal.Header>Update Product Details</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Input
              placeholder="Name"
              value={product.name}
              name="name"
              onChange={handleInputChange}
            />
            <Form.Input
              placeholder="Price"
              name="price"
              type="number"
              value={product.price}
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
