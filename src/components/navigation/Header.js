import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.module.css";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Omnishop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <i class="fa-solid fa-cart-shopping"></i>Cart
            </Nav.Link>{" "}
            <Nav.Link href="/login">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
