import React from 'react'
import './ChatList.css'

const ChatList = () => {
  const usersList = [{username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}, {username: "Kanom Pung", picture: "/bread.jpg"}]
  
  return (
    <div className='chatlist'>
      <ul>
        {usersList.map(user => (
          <li key={Math.random()} className='chat'>
            <img src={user.picture} />
            <div className='username'>{user.username}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
