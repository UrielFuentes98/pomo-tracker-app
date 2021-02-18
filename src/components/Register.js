import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Register = ({ stateToStats }) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [showProblem, setShowProblem] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((message) => {
        if (message === "User registered.") {
          console.log("🚀 ~ file: Register.js ~ line 28 ~ message", message);
          setShowProblem(false);
          stateToStats();
        } else {
          console.log("🚀 ~ file: Register.js ~ line 28 ~ message", message);
          setShowProblem(true);
        }
      })
      .catch((error) => {
        console.error("🚀 ~ file: Register.js ~ line 35 ~ error", error);
        setShowProblem(true);
      });
  }

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <h2 className="mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.username}
            type="text"
            name="username"
            placeholder="Type a username"
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="Type your email"
          />
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="Type a password"
          />
        </Form.Group>
        {showProblem && (
          <p className="text-danger font-weight-bold">
            Registration problem. Please try again.
          </p>
        )}
        <Button variant="primary" type="submit" style={{ boxShadow: "none" }}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
