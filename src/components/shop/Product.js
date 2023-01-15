import { Card, Button } from "react-bootstrap";

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
            <div>
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>{" "}
      </a>
    </Card>
  );
};

export default Product;
