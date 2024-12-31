import React from 'react'
import './SideBar.css'

const SideBar = () => {

  function closeSideBar() {
    document.querySelector(".sidebar").style.transform = "translate(-100%)"
  }

  return (
    <div className="sidebar">
      <a href="#" className="closebtn" onClick={closeSideBar}>&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#" className='logoutbtn'>Logout</a>
    </div>
  )
}

export default SideBar