import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
