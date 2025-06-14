import { useState } from "react";
import "./LoginPage.css";
import { handleLogin } from "../firebase/auth";
import { Link } from "react-router";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="loginPage-wrapper">
      <div className="form-box" id="login-container" key="login">
        <form onSubmit={(e) => handleLogin(e, loginEmail, loginPassword)}>
          <h1 className="login-title">Login</h1>
          <input
            className="login-inputs"
            type="email"
            name="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
            required
          />
          <input
            className="login-inputs"
            type="password"
            name="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
            required
          />
          <button className="login-btn" type="submit" name="login">
            Login
          </button>
          <p className="sign-up">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
