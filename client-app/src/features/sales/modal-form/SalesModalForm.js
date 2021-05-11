import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Select, Dropdown } from "semantic-ui-react";
import agent from "../../../app/api/agent";
import { DateInput } from "semantic-ui-calendar-react";

export default function SalesModalForm(props) {
  const initialState = props.selectedSales ?? {
    storeId: "",
    customerId: "",
    productId: "",
    dateSold: "",
  };

  const [sales, setSales] = useState(initialState);

  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    agent.Products.list().then((response) => {
      const productOptions = response.map((product) => {
        const container = {};

        container.key = product.id;
        container.value = product.id;
        container.text = product.name;

        return container;
      });

      setProducts(productOptions);
    });

    agent.Stores.list().then((response) => {
      const storeOptions = response.map((store) => {
        const container = {};

        container.key = store.id;
        container.value = store.id;
        container.text = store.name;

        return container;
      });

      setStores(storeOptions);
    });

    agent.Customers.list().then((response) => {
      const customerOptions = response.map((customer) => {
        const container = {};

        container.key = customer.id;
        container.value = customer.id;
        container.text = customer.name;

        return container;
      });

      setCustomers(customerOptions);
    });
  }, []);

  function handleSubmit() {
    console.log(sales);
    props.createOrEdit(sales);
    props.setOpenEditModal(false);
  }

  function handleCustomerInputChange(event, { value }) {
    console.log(value);
    setSales({ ...sales, customerId: value });
  }

  function handleProductInputChange(event, { value }) {
    console.log(value);
    setSales({ ...sales, productId: value });
  }

  function handleStoreInputChange(event, { value }) {
    console.log(value);
    setSales({ ...sales, storeId: value });
  }

  function handleChange(event, { name, value }) {
    setSales({ ...sales, dateSold: value });
  }

  return (
    <Modal
      onClose={() => props.setOpenEditModal(false)}
      onOpen={() => props.setOpenEditModal(true)}
      open={props.openEditModal}
    >
      <Modal.Header>Update Sales Details</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <DateInput
            name="date"
            placeholder="Date"
            value={sales.dateSold}
            iconPosition="left"
            onChange={handleChange}
            dateFormat="YYYY-MM-DD"
            style={{ display: "block", marginBottom: "10px" }}
          />
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Select
              placeholder="Customers"
              onChange={handleCustomerInputChange}
              options={customers}
              id="customerId"
              value={sales.customerId}
              style={{ display: "block", marginBottom: "10px" }}
            />
            <Select
              placeholder="Products"
              onChange={handleProductInputChange}
              options={products}
              name="productId"
              value={sales.productId}
              style={{ display: "block", marginBottom: "10px" }}
            />
            <Select
              placeholder="Stores"
              onChange={handleStoreInputChange}
              options={stores}
              name="storeId"
              value={sales.storeId}
              style={{ display: "block", marginBottom: "10px" }}
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
