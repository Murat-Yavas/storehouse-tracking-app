import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

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
            <div className="d-flex">
              <Nav.Link className={`${styles["nav-link-element"]}`}>
                <NavLink className={`${styles["text"]}`} to="/">
                  Storehouses
                </NavLink>
              </Nav.Link>
              <Nav.Link className={`${styles["nav-link-element"]}`}>
                <NavLink className={`${styles["text"]}`} to="/">
                  Pricing
                </NavLink>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className={` ${styles["nav-link-element"]}`}>
                <NavLink className={`${styles["text"]}`} to="/auth">
                  Login/Signup
                </NavLink>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
