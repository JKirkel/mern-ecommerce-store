import { Container, Row, Col } from "react-bootstrap";

import Product from "../components/shop/Product";

import productsData from "../products";

const HomePage = () => {
  const products = productsData.map((product) => {
    console.log(product.name);
    return (
      <Col key={product._id} className=" d-flex justify-content-center">
        <Product product={product} />
      </Col>
    );
  });

  return (
    <Container fluid>
      <h3>Latest Products</h3>
      <Row lg={4}>{products}</Row>
    </Container>
  );
};

export default HomePage;
