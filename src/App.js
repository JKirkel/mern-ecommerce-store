import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/navigation/Header";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products/:productName/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}
