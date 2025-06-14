import "./LandingPage.css";
import { Link, Navigate } from "react-router";
import { useUser } from "../contexts/UserContext";

const LandingPage = () => {
  const { currentUser } = useUser();
  return (
    <>
      {currentUser ? (
        <Navigate to={"/chat"} replace />
      ) : (
        <div className="landing-wrapper">
          <h1>Media City</h1>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default LandingPage;
