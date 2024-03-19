import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../Context/Firebase";

function Register() {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signupUserWithEmailAndPassword(email, password);
      alert("Registration Successful");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(firebase);

  return (
    <div className="container mt-5">
      <Row>
        <Col sm={6} className="mx-auto border p-4 rounded shadow  ">
          <Form onClick={handleSubmit}>
            <h1 className="text-center mb-2 ">Register</h1>
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
                Create Account
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
