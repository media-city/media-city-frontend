import { useState } from "react";
import "./LoginPage.css";
import { handleLogin, handleSignup } from "../firebase/auth";

const LoginPage = () => {
  const [action, setAction] = useState("Login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSwitch = (newAction) => {
    setAction(newAction);
    setLoginEmail("");
    setLoginPassword("");
    setSignupEmail("");
    setSignupPassword("");
    setFname("");
    setLname("");
  };

  return (
    <div className="loginPage-wrapper">
      {action === "Login" ? (
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
              Don't have an account?{" "}
              <a href="#" onClick={() => handleSwitch("Signup")}>
                Sign Up
              </a>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-box" id="signup-container" key="signup">
          <form
            onSubmit={(e) =>
              handleSignup(e, fname, lname, signupEmail, signupPassword)
            }
          >
            <h1 className="signup-title">Sign Up</h1>
            <input
              className="signup-inputs"
              type="text"
              name="fname"
              placeholder="First name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              required
            />
            <input
              className="signup-inputs"
              type="text"
              name="lname"
              placeholder="Last name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
              required
            />
            <input
              className="signup-inputs"
              type="email"
              name="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => {
                setSignupEmail(e.target.value);
              }}
              required
            />
            <input
              className="signup-inputs"
              type="password"
              name="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => {
                setSignupPassword(e.target.value);
              }}
              required
            />
            <button className="signup-btn" type="submit" name="signup">
              Sign Up
            </button>
            <p className="sign-up">
              Already have an account?{" "}
              <a href="#" onClick={() => handleSwitch("Login")}>
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
