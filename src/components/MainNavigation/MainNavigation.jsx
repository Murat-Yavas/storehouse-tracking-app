import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-body-tertiary ${styles["main-navigation"]}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto ${styles["nav-links"]}`}>
            <Nav.Link className={`${styles["nav-link-element"]}`}>
              Storehouses
            </Nav.Link>
            <Nav.Link className={`${styles["nav-link-element"]}`}>
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
