import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  function openSideBar() {
    document.querySelector(".sidebar").style.transform = "translate(0)";
  }

  return (
    <div className="hamburger-menu" onClick={openSideBar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
