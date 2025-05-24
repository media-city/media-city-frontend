import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profilePage-wrapper">
      <div className="editprofile-container">
        <div className="editpicture-container">
          <div className="title-header">Profile Picture</div>
          <img className="profilepic" src="/bread.jpg" alt="" />
          <button className="upload-btn">Upload new image</button>
        </div>
        <div className="editinfo-container">
          <div className="title-header">Account Details</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
