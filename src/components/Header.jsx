import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          BOOK STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4 ">
            <Link
              to="/product"
              className="text-decoration-none text-black fw-bold "
            >
              Products
            </Link>
            <Link
              to="/product-listing"
              className="text-decoration-none text-black fw-bold "
            >
              Products-List
            </Link>
          </Nav>
          <Nav className="gap-4">
            <Link
              to="/login"
              className="text-decoration-none text-black fw-bold "
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-decoration-none text-black fw-bold "
            >
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
