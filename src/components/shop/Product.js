import { Card, Button } from "react-bootstrap";

import Rating from "./Rating";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Card className={styles.ProductCard}>
      <a href={`/products/${product.name}`}>
        <Card.Img variant="top" src={`${product.image}`} />
        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text>
            {" "}
            <Rating value={product.rating} />
            <span>{product.numReviews} reviews</span>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>{" "}
      </a>
    </Card>
  );
};

export default Product;
