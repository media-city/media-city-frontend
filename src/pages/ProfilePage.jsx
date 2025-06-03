import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="profilePage-wrapper">
      <div className="editprofile-container">
        <div className="editpicture-container">
          <div className="title-header">Profile Picture</div>
          <img className="profilepic" src="/bread.jpg" alt="" />
          <p>JPG or PNG no larger than 5 MB</p>
          <label htmlFor="image-uploader" className="upload-img-btn">
            Upload new image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image-uploader"
            onChange={handleFileChange}
          />
        </div>
        <div className="editinfo-container">
          <div className="title-header">Account Details</div>
          <form action="">
            <div className="full-width">
              <label htmlFor="uname">
                Username (how your name will appear to other users on the site)
              </label>
              <input type="text" id="uname" name="uname" />
            </div>
            <div className="half-width">
              <label htmlFor="fname">First name</label>
              <input type="text" id="fname" name="fname" />
            </div>
            <div className="half-width">
              <label htmlFor="lname">Last name</label>
              <input type="text" id="lname" name="lname" />
            </div>
            <div className="full-width">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="half-width">
              <label htmlFor="phonenum">Phone number</label>
              <input type="text" id="phonenum" name="phonenum" />
            </div>
            <div className="half-width">
              <label htmlFor="dataofbirth">Date of birth</label>
              <input type="date" id="dataofbirth" name="dataofbirth" />
            </div>
            <div className="half-width">
              <label htmlFor="gender">Gender</label>
              <input type="text" id="gender" name="gender" />
            </div>
            <div className="save-changes-btn-container">
              <button className="save-changes-btn" type="submit">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
