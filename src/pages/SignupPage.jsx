import { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router";
import { handleSignup } from "../firebase/auth";

const SignupPage = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  return (
    <div className="signupPage-wrapper">
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
            Already have an account?
            <Link to={"/login"}> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
