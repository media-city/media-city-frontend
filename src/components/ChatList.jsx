import React from 'react'
import './ChatList.css'

const ChatList = ({ usersList, onSelectedUser }) => {
  
  return (
    <div id='chatlist-container'>
      <div className='chatlist-header'>
        <input className='search-input' type="text" placeholder='Search'/>
        {usersList.username}
      </div>
      <ul>
        {usersList.map((user) => (
          <button key={user.username} className='chat' onClick={() => onSelectedUser(user.username)}>
            <img className='profilepic' src={user.picture} />
            <h4 className='username'>{user.username}</h4>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
