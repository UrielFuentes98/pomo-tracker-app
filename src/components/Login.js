import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("🚀 ~ email", email);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log("🚀 ~ password", password);
  };

  return (
    <div>
      <h2 className="mb-4">Login</h2>
      <Form>
        <Form.Group controlId="EmailUsername">
          <Form.Label>Username/Email</Form.Label>
          <Form.Control type="email" placeholder="Enter username or email" />
        </Form.Group>

        <Form.Group controlId="LoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
