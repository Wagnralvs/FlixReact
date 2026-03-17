import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

export default function Header() {
  return (
  <Navbar bg="dark" sticky="top" data-bs-theme="dark" className="justify-content-top">
        <Container>
          <Navbar.Brand href="#home">ReactFlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
  );
}