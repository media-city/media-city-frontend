import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="loginPage-wrapper">
      {action === "Login" ? (
        <div className="form-box" id="login-container" key="login">
          <form action="">
            <h1 className="login-title">Login</h1>
            <input
              className="login-inputs"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="login-inputs"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="login-btn" type="submit" name="login">
              Login
            </button>
            <p className="sign-up">
              Don't have an account?{" "}
              <a href="#" onClick={() => setAction("SignUp")}>
                Sign Up
              </a>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-box" id="signup-container" key="signup">
          <form action="">
            <h1 className="signup-title">Sign Up</h1>
            <input
              className="signup-inputs"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              className="signup-inputs"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="signup-inputs"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="signup-btn" type="submit" name="signup">
              Sign Up
            </button>
            <p className="sign-up">
              Already have an account?{" "}
              <a href="#" onClick={() => setAction("Login")}>
                Login
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
