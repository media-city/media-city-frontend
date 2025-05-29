import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profilePage-wrapper">
      <div className="editprofile-container">
        <div className="editpicture-container">
          <div className="title-header">Profile Picture</div>
          <img className="profilepic" src="/bread.jpg" alt="" />
          <p>JPG or PNG no larger than 5 MB</p>
          <button className="uploadimg-btn">Upload new image</button>
        </div>
        <div className="editinfo-container">
          <div className="title-header">Account Details</div>
          <div>
            <label htmlFor="username">
              Username (how your name will appear to other users on the site)
            </label>
            <input type="text" id="uname" name="uname" />
          </div>
          <div>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div>
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phonenum">Phone number</label>
            <input type="text" id="phonenum" name="phonenum" />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" name="gender" />
          </div>
          <div>
            <label htmlFor="dataofbirth">Date of birth</label>
            <input type="text" id="dataofbirth" name="dataofbirth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
