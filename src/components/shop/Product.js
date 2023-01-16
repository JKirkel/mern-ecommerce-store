import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Card className={styles.ProductCard}>
      <Link to={`/products/${product.name}/${product._id}`}>
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
      </Link>
    </Card>
  );
};

export default Product;
