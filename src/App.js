import Product from "./components/shop/Product";
import Header from "./components/navigation/Header";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import productsData from "./products";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}
