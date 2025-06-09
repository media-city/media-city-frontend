import { useContext } from "react";
import "./SideBar.css";
import { UserContext } from "../contexts/UserContext";

const SideBar = () => {
  function closeSideBar() {
    document.querySelector(".sidebar-container").style.transform =
      "translate(-100%)";
  }

  const user = useContext(UserContext);
  console.log(user.currentUser);

  return (
    <div className="sidebar-container">
      <a href="#" className="closebtn" onClick={closeSideBar}>
        &times;
      </a>
      <div className="profile-container">
        {/* <img className="profilepic" src={user[0].picture} alt="" /> */}
        <h3>{user.currentUser.firstName}</h3>
        <a href="#">Edit</a>
      </div>
      <a href="#">Home</a>
      <a href="#">Chat</a>
      <a href="#">Short Video</a>
      <a href="#">Shopping</a>
      <a href="#" className="logoutbtn">
        Logout
      </a>
    </div>
  );
};

export default SideBar;
