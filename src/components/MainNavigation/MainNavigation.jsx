import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userName");
    dispatch(userActions.changeLoginState(false));
    window.location.reload();
  };

  if (localStorage.getItem("currentUser") !== null) {
    dispatch(userActions.changeLoginState(true));
  }

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles["main-navigation"]}`}>
      {isMenuOpen ? (
        <ul className={`${styles["hamburger-menu"]}`}>
          <NavLink className={`${styles.text}`} to="/">
            Home
          </NavLink>
          <NavLink className={`${styles.text}`} to="/storehouses">
            Storehouses
          </NavLink>
          {isLogin === false ? (
            <NavLink className={`${styles.text}`} to="/auth">
              Login/Signup
            </NavLink>
          ) : (
            <p className="m-0" onClick={() => handleLogout()}>
              Logout
            </p>
          )}
        </ul>
      ) : (
        ""
      )}
      <div className={`${styles["nav-links"]}`}>
        <NavLink className={`${styles.text}`} to="/">
          Home
        </NavLink>

        <NavLink className={`${styles.text}`} to="/storehouses">
          Storehouses
        </NavLink>
      </div>

      <div className={` ${styles["nav-links"]}`}>
        {isLogin === false ? (
          <NavLink className={`${styles.text}`} to="/auth">
            Login/Signup
          </NavLink>
        ) : (
          <p className="m-0" onClick={() => handleLogout()}>
            Logout
          </p>
        )}
      </div>
      <RxHamburgerMenu className={`${styles.icon}`} onClick={handleOpenMenu} />
    </nav>
  );
};

export default MainNavigation;

{
  /* 
  <NavLink className={`${styles.text}`} to="/">
    Home
  </NavLink>

  <NavLink className={`${styles.text}`} to="/storehouses">
    Storehouses
  </NavLink>

<div>
<Nav.Link className={` ${styles["nav-link-element"]}`}>
  {isLogin === false ? (
    <NavLink className={`${styles.text}`} to="/auth">
      Login/Signup
    </NavLink>
  ) : (
    <p className="m-0" onClick={() => handleLogout()}>
      Logout
    </p>
  )}
</Nav.Link>
</div> */
}
