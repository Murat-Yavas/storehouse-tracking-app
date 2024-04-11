import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <Form className={`${styles["auth-form"]}`}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className={`${styles["auth-buttons"]}`}>
        <Button variant="success" type="submit" className="mb-5">
          Register
        </Button>

        <Form.Text className={`${styles["register-section"]}`}>
          Are you already registered?
        </Form.Text>
        <Button variant="success" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Auth;
