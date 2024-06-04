import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css'; // Importa el archivo CSS

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../public/assets/img/mr.Lion.png"
            width="90px"
            height="90px"
            className="d-inline-block align-top"
            alt="Mr. Lion"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Camisetas</Nav.Link>
            <Nav.Link href="#products">Pantalones</Nav.Link>
            <Nav.Link href="#products">Camperas</Nav.Link>
            <Nav.Link href="#contact">Contactos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
