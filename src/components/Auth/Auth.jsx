import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Auth.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendAuthRequest } from "../../redux/api/userApiCall";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../redux/user-slice";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthButton = (path) => {
    const userInfo = { userName: username, password };
    sendAuthRequest(dispatch, userInfo, path);
    setUsername("");
    setPassword("");

    if (path === "login") {
      // dispatch(userActions.changeLoginState(true));
      navigate("/");
    }
  };

  return (
    <Form className={`${styles["auth-form"]}`}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <div className={`${styles["auth-buttons"]}`}>
        <Button
          onClick={() => handleAuthButton("login")}
          variant="success"
          type="button"
          className="mb-5"
        >
          Login
        </Button>

        <Form.Text className={`${styles["register-section"]}`}>
          Not registered yet?
        </Form.Text>
        <Button
          onClick={() => handleAuthButton("register")}
          variant="success"
          type="button"
        >
          Signup
        </Button>
      </div>
    </Form>
  );
};

export default Auth;
