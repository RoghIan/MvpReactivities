import { Table, Button, Icon } from "semantic-ui-react";
import ProductModalForm from "../modal-form/ProductModalForm";
import React, { useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import DeleteConfirmationModal from "../modal-form/DeleteConfirmationModal";

export default function ProductTable() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

  function deleteSelectedProduct(product) {
    handleSelectProduct(product ? product.id : 0);
    setOpenDeleteConfirmationModal(true);
  }

  function editSelectedProduct(product) {
    handleSelectProduct(product ? product.id : 0);
    setOpenEditModal(true);
  }

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(undefined);

  useEffect(() => {
    agent.Products.list().then((response) => {
      setProducts(response);
    });
  }, []);

  function handleSelectProduct(id) {
    setSelectedProduct(products.find((x) => x.id === id));
  }

  function handleCreateOrEditProduct(product) {
    if (product.id) {
      agent.Products.update(product).then(() => {
        setProducts([...products.filter((x) => x.id !== product.id), product]);
      });
    } else {
      product.id = 0;
      agent.Products.create(product).then(() => {
        setProducts([...products, { ...product, product }]);
      });
    }
  }

  function handleDeleteProduct(id) {
    agent.Products.del(id).then(() => {
      setOpenDeleteConfirmationModal(false);
      setProducts([...products.filter((x) => x.id !== id)]);
    });
  }

  return (
    <>
      <Button
        positive
        content="Create Product"
        onClick={() => editSelectedProduct(undefined)}
      />

      {openEditModal && (
        <ProductModalForm
          setOpenEditModal={setOpenEditModal}
          openEditModal={openEditModal}
          selectedProduct={selectedProduct}
          createOrEdit={handleCreateOrEditProduct}
        />
      )}

      {openDeleteConfirmationModal && (
        <DeleteConfirmationModal
          setOpenDeleteConfirmationModal={setOpenDeleteConfirmationModal}
          openDeleteConfirmationModal={openDeleteConfirmationModal}
          selectedProduct={selectedProduct}
          deleteSales={handleDeleteProduct}
        />
      )}

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>
                <Button
                  color="yellow"
                  onClick={() => editSelectedProduct(product)}
                >
                  <Icon name="edit" />
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  color="red"
                  onClick={() => deleteSelectedProduct(product)}
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
