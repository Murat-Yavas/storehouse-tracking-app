import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Auth.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendAuthRequest } from "../../redux/api/userApiCall";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = () => {
    const userInfo = { userName: username, password };
    sendAuthRequest(dispatch, userInfo, "register");
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    const userInfo = { userName: username, password };
    sendAuthRequest(dispatch, userInfo, "login");
    setUsername("");
    setPassword("");
  };

  return (
    <Form className={`${styles["auth-form"]}`}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <div className={`${styles["auth-buttons"]}`}>
        <Button
          onClick={() => handleRegister()}
          variant="success"
          type="submit"
          className="mb-5"
        >
          Register
        </Button>

        <Form.Text className={`${styles["register-section"]}`}>
          Are you already registered?
        </Form.Text>
        <Button onClick={() => handleLogin()} variant="success" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Auth;
