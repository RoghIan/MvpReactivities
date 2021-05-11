import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/logo192.png" alt="logo" style={{ marginRight: 10 }} />
          Mvp Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/customers" name="Customers" />
        <Menu.Item as={NavLink} to="/products" name="Products" />
        <Menu.Item as={NavLink} to="/stores" name="Stores" />
        <Menu.Item as={NavLink} to="/sales" name="Sales" />
      </Container>
    </Menu>
  );
}
