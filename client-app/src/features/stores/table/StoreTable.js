import { Table, Button, Icon } from "semantic-ui-react";
import StoreModalForm from "../modal-form/StoreModalForm";
import DeleteConfirmationModal from "../modal-form/DeleteConfirmationModal";
import React, { useEffect, useState } from "react";
import agent from "../../../app/api/agent";

export default function StoreTable() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

  function deleteSelectedStore(store) {
    handleSelectStore(store ? store.id : 0);
    setOpenDeleteConfirmationModal(true);
  }

  function editSelectedStore(store) {
    handleSelectStore(store ? store.id : 0);
    setOpenEditModal(true);
  }

  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(undefined);

  useEffect(() => {
    agent.Stores.list().then((response) => {
      setStores(response);
    });
  }, []);

  function handleSelectStore(id) {
    setSelectedStore(stores.find((x) => x.id === id));
  }

  function handleCreateOrEditStore(store) {
    if (store.id) {
      agent.Stores.update(store).then(() => {
        setStores([...stores.filter((x) => x.id !== store.id), store]);
      });
    } else {
      store.id = 0;
      agent.Stores.create(store).then(() => {
        setStores([...stores, { ...store, store }]);
      });
    }
  }

  function handleDeleteStore(id) {
    agent.Stores.del(id).then(() => {
      setOpenDeleteConfirmationModal(false);
      setStores([...stores.filter((x) => x.id !== id)]);
    });
  }

  return (
    <>
      <Button
        positive
        content="Create Store"
        onClick={() => editSelectedStore(undefined)}
      />

      {openEditModal && (
        <StoreModalForm
          setOpenEditModal={setOpenEditModal}
          openEditModal={openEditModal}
          selectedStore={selectedStore}
          createOrEdit={handleCreateOrEditStore}
        />
      )}

      {openDeleteConfirmationModal && (
        <DeleteConfirmationModal
          setOpenDeleteConfirmationModal={setOpenDeleteConfirmationModal}
          openDeleteConfirmationModal={openDeleteConfirmationModal}
          selectedStore={selectedStore}
          deleteSales={handleDeleteStore}
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
          {stores.map((store) => (
            <Table.Row key={store.id}>
              <Table.Cell>{store.name}</Table.Cell>
              <Table.Cell>{store.address}</Table.Cell>
              <Table.Cell>
                <Button color="yellow" onClick={() => editSelectedStore(store)}>
                  <Icon name="edit" />
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="red" onClick={() => deleteSelectedStore(store)}>
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
