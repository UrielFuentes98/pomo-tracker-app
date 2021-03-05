import React, { useReducer, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Login = () => {
  const [formData, setFormData] = useReducer(formReducer, {
    user_id: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const domain = process.env.REACT_APP_BACKEND_URL || "";
    fetch(`${domain}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      // credentials: "include",
    })
      //Check response and set error message or stats component
      .then((response) => {
        return response.text();
      })
      .then((message) => {
        if (message === "User logged in") {
          history.push("/stats");
          setErrorMessage("");
        } else {
          console.log("🚀 ~ file: Login.js ~ line 35 ~ message", message);
          setErrorMessage(message);
        }
      })
      .catch((error) => {
        setErrorMessage("Couldn't log in.");
        console.error(error);
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
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="EmailUsername">
          <Form.Label>Username/Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.user_id}
            name="user_id"
            type="text"
            placeholder="Enter username or email"
          />
        </Form.Group>

        <Form.Group controlId="LoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <p className="text-danger font-weight-bold">{errorMessage}</p>
        <div style={{ position: "relative" }}>
          <Button variant="primary" type="submit" style={{ boxShadow: "none" }}>
            Login
          </Button>
          <Link
            to="/register"
            style={{
              boxShadow: "none",
              position: "absolute",
              bottom: 0,
              right: 0,
              color: "darkslategray",
            }}
          >
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
