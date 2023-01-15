import Product from "./components/shop/Product";
import Header from "./components/navigation/Header";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import productsData from "./products";

export default function App() {
  const products = productsData.map((product) => {
    return <Product product={product} />;
  });

  return (
    <div className="App">
      <Header />
      {products}
    </div>
  );
}
