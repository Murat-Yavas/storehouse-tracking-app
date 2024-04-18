import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const handleLogout = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    // localStorage.removeItem("refreshKey");
    localStorage.removeItem("userName");
    window.location.reload();
  };

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
                <NavLink className={`${styles.text}`} to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link className={`${styles["nav-link-element"]}`}>
                <NavLink className={`${styles.text}`} to="/storehouses">
                  Storehouses
                </NavLink>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className={` ${styles["nav-link-element"]}`}>
                {localStorage.getItem("currentUser") === null ? (
                  <NavLink className={`${styles.text}`} to="/auth">
                    Login/Signup
                  </NavLink>
                ) : (
                  <p className="m-0" onClick={handleLogout}>
                    Logout
                  </p>
                )}
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
