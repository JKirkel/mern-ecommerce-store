import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import Rating from "../components/shop/Rating";

import productsData from "../../backend/products";

const ProductDetails = () => {
  const product = productsData[0];
  const params = useParams();

  return (
    <Container>
      {" "}
      <Row>
        {" "}
        <Col>
          {" "}
          <Image src={product.image} fluid />
        </Col>
        <Col>
          {" "}
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} />
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Price: {product.price}</h6>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="text-center">
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Status:{" "}
              {product.countInStock > 0
                ? `${product.countInStock} left`
                : "Out of stock"}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="dark" disabled={product.countInStock === 0}>
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
