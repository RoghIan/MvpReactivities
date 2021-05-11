import { Table, Button, Icon } from "semantic-ui-react";
import SalesModalForm from "../modal-form/SalesModalForm";
import DeleteConfirmationModal from "../modal-form/DeleteConfirmationModal";
import React, { useEffect, useState } from "react";
import agent from "../../../app/api/agent";

export default function SalesTable() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

  function deleteSelectedSales(sales) {
    handleSelectSales(sales ? sales.id : 0);
    setOpenDeleteConfirmationModal(true);
  }

  function editSelectedSales(sales) {
    handleSelectSales(sales ? sales.id : 0);
    setOpenEditModal(true);
  }

  const [sales, setSales] = useState([]);
  const [selectedSales, setSelectedSales] = useState(undefined);

  useEffect(() => {
    agent.Sales.list().then((response) => {
      setSales(response);
    });
  }, []);

  function handleSelectSales(id) {
    setSelectedSales(sales.find((x) => x.id === id));
  }

  function handleCreateOrEditSales(sale) {
    console.log(sale);
    if (sale.id) {
      agent.Sales.update(sale).then(() => {
        agent.Sales.list().then((response) => {
          setSales(response);
        });
      });
    } else {
      sale.id = 0;
      agent.Sales.create(sale).then(() => {
        agent.Sales.list().then((response) => {
          setSales(response);
        });
      });
    }
  }

  function handleDeleteSales(id) {
    agent.Sales.del(id).then(() => {
      setOpenDeleteConfirmationModal(false);
      setSales([...sales.filter((x) => x.id !== id)]);
    });
  }

  return (
    <>
      <Button
        positive
        content="Create Sales"
        onClick={() => editSelectedSales(undefined)}
      />

      {openEditModal && (
        <SalesModalForm
          setOpenEditModal={setOpenEditModal}
          openEditModal={openEditModal}
          selectedSales={selectedSales}
          createOrEdit={handleCreateOrEditSales}
        />
      )}

      {openDeleteConfirmationModal && (
        <DeleteConfirmationModal
          setOpenDeleteConfirmationModal={setOpenDeleteConfirmationModal}
          openDeleteConfirmationModal={openDeleteConfirmationModal}
          selectedSales={selectedSales}
          deleteSales={handleDeleteSales}
        />
      )}

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Customer</Table.HeaderCell>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Store</Table.HeaderCell>
            <Table.HeaderCell>Date Sold</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sales &&
            sales.map((sales) => (
              <Table.Row key={sales.id}>
                <Table.Cell>{sales.customer.name}</Table.Cell>
                <Table.Cell>{sales.product.name}</Table.Cell>
                <Table.Cell>{sales.store.name}</Table.Cell>
                <Table.Cell>{sales.dateSold}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="yellow"
                    onClick={() => editSelectedSales(sales)}
                  >
                    <Icon name="edit" />
                    Edit
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="red"
                    onClick={() => deleteSelectedSales(sales)}
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
