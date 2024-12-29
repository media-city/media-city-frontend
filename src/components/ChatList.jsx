import React from 'react'
import './ChatList.css'
import HamburgerMenu from './HamburgerMenu';

const ChatList = ({ usersList, onSelectedUser, onSearch, search }) => {
  
  return (
    <div id='chatlist-container'>
      <div className='chatlist-header'>
        <HamburgerMenu />
        <input className='searchbar' type="text" placeholder='Search' onChange={onSearch}/>
      </div>
      <ul>
        {usersList.filter(user => user.username.toLowerCase().includes(search.toLowerCase())).map((user) => (
          <button key={user.id} className='chat' onClick={() => onSelectedUser(user.username)}>
            <img className='profilepic' src={user.picture != null ? user.picture : "./blankprofilepic.jpg"} />
            <h4 className='username'>{user.username}</h4>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
