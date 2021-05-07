import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Header,
  List,
  Table,
  Button,
  Icon,
  Container,
} from "semantic-ui-react";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/customer").then((response) => {
      console.log(response);
      setCustomers(response.data);
    });
  }, []);

  return (
    <Container>
      <div>
        <Header as="h2" icon="users" content="MvpReactivities" />
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
                  <Button color="yellow">
                    <Icon name="edit" />
                    Edit
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red">
                    <Icon name="trash" />
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}

export default App;
