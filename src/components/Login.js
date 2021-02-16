import React, { useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Login = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((message) => console.log(message))
      .catch((error) => console.log("error", error));
  }

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="EmailUsername">
          <Form.Label>Username/Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.username}
            name="user_id"
            type="text"
            placeholder="Enter username or email"
          />
        </Form.Group>

        <Form.Group controlId="LoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.username}
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <div style={{ position: "relative" }}>
          <Button variant="primary" type="submit" style={{ boxShadow: "none" }}>
            Login
          </Button>
          <a href="#" style={{ position: "absolute", bottom: 0, right: 0, color: "darkslategray" }}>
            Register
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
