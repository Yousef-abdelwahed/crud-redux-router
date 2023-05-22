import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../index.css";
const Header = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="/">Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav-bar">
          <Nav className="me-auto">
            <NavLink to="/" className="" end>
              Home
            </NavLink>
            <NavLink to="post/add" className="">
              Add Post
            </NavLink>
          </Nav>
          <NavLink to="login">Login</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
