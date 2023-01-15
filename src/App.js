import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/navigation/Header";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      {" "}
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
