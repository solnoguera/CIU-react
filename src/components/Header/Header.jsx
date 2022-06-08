import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            FOXY!
          </Navbar.Brand>
          <Nav className="me-auto navBar">
            <Nav.Link href="#ropa">Ropa</Nav.Link>
            <Nav.Link href="#talles">Talles</Nav.Link>
            <Nav.Link href="#sucursales">Sucursales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
