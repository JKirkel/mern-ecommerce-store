import { Card, Button } from "react-bootstrap";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <a href={`/products/${product.name}`}>
      <Card className={styles.ProductCard}>
        <Card.Img variant="top" src={`${product.image}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Product;
