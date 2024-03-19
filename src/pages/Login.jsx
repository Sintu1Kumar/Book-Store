import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../Context/Firebase";

function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signInUserWithEmailAndPassword(email, password);
      alert("Login Successful");
    } catch (error) {
      console.log(error);
    }
  };

  const googleSignInHandler = async (e) => {
    try {
      await firebase.signInWithGoogle();
      alert("Login Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col sm={6} className="mx-auto border p-4 rounded shadow  ">
          <Form onClick={handleSubmit}>
            <h1 className="text-center mb-2 ">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter Your Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter Your Password"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <h4 className="text-center my-2">OR</h4>
          <div className="text-center">
            <Button onClick={googleSignInHandler} variant="danger">
              Sign in with Gmail
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
