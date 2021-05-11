import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default function DeleteConfirmationModal(props) {
  return (
    <Modal
      basic
      onClose={() => props.setOpenDeleteConfirmationModal(false)}
      onOpen={() => props.setOpenDeleteConfirmationModal(true)}
      open={props.openDeleteConfirmationModal}
      size="small"
    >
      <Header icon>
        <Icon name="archive" />
        Delete Confirmation
      </Header>
      <Modal.Content>
        <p>Are you sure you want to delete this ?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          inverted
          onClick={() => props.setOpenDeleteConfirmationModal(false)}
        >
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => props.deleteSales(props.selectedStore.id)}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
