import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/navigation/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
