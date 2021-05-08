import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/logo192.png" alt="logo" style={{ marginRight: 10 }} />
          Mvp Reactivities
        </Menu.Item>
        <Menu.Item name="Customers" />
        <Menu.Item>
          <Button positive content="Create Customer" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
