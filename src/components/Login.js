import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("🚀 ~ email", email)
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log("🚀 ~ password", password)

  };

  return (
    <div className="right-panel">
      <form id="login-form" onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <div>
          <label for="email">Username/Email:</label>
          <input
            type="text"
            id="email"
            name="user_email"
            size="15"
            onChange={handleChangeEmail}
            value={email}
          />
        </div>

        <div class="login-input">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            size="10"
            onChange={handleChangePassword}
            value={password}
          />
        </div>

        <div id="login-form-buttons">
          <button type="submit">Log In</button>
          <button type="button">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
