import React from 'react'
import './ChatList.css'

const ChatList = () => {
  const usersList = [
    {username: "Kanom Pung", picture: "/bread.jpg"},
    {username: "Som Tam", picture: "/somtam.jpg"},
    {username: "Pad Thai", picture: "/padthai.jpg"},
    {username: "Kanom Pung", picture: "/bread.jpg"},
    {username: "Som Tam", picture: "/somtam.jpg"},
    {username: "Pad Thai", picture: "/padthai.jpg"},
    {username: "Kanom Pung", picture: "/bread.jpg"},
    {username: "Som Tam", picture: "/somtam.jpg"},
    {username: "Pad Thai", picture: "/padthai.jpg"}
  ]
  
  return (
    <div id='chatlist-container'>
      <div className='chatlist-header'>
        <input className='search-input' type="text" placeholder='Search'/>
        {usersList.username}
      </div>
      <ul>
        {usersList.map(user => (
          <button key={Math.random()} className='chat'>
            <img className='profilepic' src={user.picture} />
            <h4 className='username'>{user.username}</h4>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
