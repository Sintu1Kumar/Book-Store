import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">BOOK STORE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Product</Nav.Link>
          <Nav.Link href="/listing">Product Listing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
