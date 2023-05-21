import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#home">Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav-bar">
          <Nav className="me-auto">
            <Nav.Link href="#home" active={true}>
              Home
            </Nav.Link>
            <Nav.Link href="#post">Add Post</Nav.Link>
          </Nav>
          <Nav.Link href="#login">Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="header">
    //   <h1>CRUD APP</h1>
    //   <ul className="nav">
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/">Add Post</a>
    //     </li>
    //     <li className="login">login</li>
    //   </ul>
    // </div>
  );
};

export default Header;
