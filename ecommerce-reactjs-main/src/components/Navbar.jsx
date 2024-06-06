import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css'; // Importa el archivo CSS

function NavBar({ filterProductsByCategory }) {
  return (
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex flex-column align-items-center">
          <img
            src="/assets/img/mr.Lion.png"
            width="90px"
            height="90px"
            className="d-inline-block align-top"
            alt="Mr. Lion"
          />
          <span className="navbar-title">Mr. Lion Croqueteria</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link onClick={() => filterProductsByCategory('all')}>Home</Nav.Link>
            <Nav.Link onClick={() => filterProductsByCategory('tapa')} id="tapas">Tapas</Nav.Link>
            <Nav.Link onClick={() => filterProductsByCategory('croqueta')} id="croquetas">Croquetas</Nav.Link>
            <Nav.Link onClick={() => filterProductsByCategory('postre')} id="postres">Postres</Nav.Link>
            <Nav.Link onClick={() => filterProductsByCategory('bebida')} id="bebidas">Bebidas</Nav.Link>
          </Nav>
          <CartWidget itemCount={0} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
