import React from "react";
import "./SideBar.css";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const SideBar = ({ user }) => {
  function closeSideBar() {
    document.querySelector(".sidebar-container").style.transform =
      "translate(-100%)";
  }
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="sidebar-container">
      <a href="#" className="closebtn" onClick={closeSideBar}>
        &times;
      </a>
      <div className="profile-container">
        <img className="profilepic" src={user[0].picture} alt="" />
        <h3>{user[0].username} </h3>
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
