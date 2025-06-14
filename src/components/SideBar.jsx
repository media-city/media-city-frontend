import "./SideBar.css";
import { useUser } from "../contexts/UserContext";
import { handleLogout } from "../firebase/auth";

const SideBar = () => {
  function closeSideBar() {
    document.querySelector(".sidebar-container").style.transform =
      "translate(-100%)";
  }

  const { currentUser, loading } = useUser();
  console.log(currentUser);

  return (
    <div className="sidebar-container">
      <a href="#" className="closebtn" onClick={closeSideBar}>
        &times;
      </a>
      <div className="profile-container">
        {/* <img className="profilepic" src={user[0].picture} alt="" /> */}
        <h3>{currentUser.email}</h3>
        <a href="#">Edit</a>
      </div>
      <a href="#">Home</a>
      <a href="#">Chat</a>
      <a href="#">Short Video</a>
      <a href="#">Shopping</a>
      <a href="#" className="logoutbtn" onClick={handleLogout}>
        Logout
      </a>
    </div>
  );
};

export default SideBar;
