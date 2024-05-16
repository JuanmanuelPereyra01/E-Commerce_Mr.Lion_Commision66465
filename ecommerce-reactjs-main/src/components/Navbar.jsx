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
            src="/assets/mr.Lion.png"
            width="80px"
            height="80px"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#products">Promociones</Nav.Link>
            <Nav.Link href="#about-us">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contactos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
