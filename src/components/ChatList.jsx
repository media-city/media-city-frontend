import { React, useState } from "react";
import "./ChatList.css";
import HamburgerMenu from "./icons/HamburgerMenu";

const ChatList = ({ usersList, onSelectedUser }) => {
  const [search, setSearch] = useState("");

  return (
    <div id="chatlist-container">
      <div className="chatlist-header">
        <HamburgerMenu />
        <input
          className="searchbar"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {usersList
          .filter((user) =>
            user.username.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <button
              key={user.id}
              className="chat"
              onClick={() => onSelectedUser(user.username)}
            >
              <img
                className="profilepic"
                src={
                  user.picture != null ? user.picture : "./blankprofilepic.jpg"
                }
              />
              <h4 className="username">{user.username}</h4>
            </button>
          ))}
      </ul>
    </div>
  );
};

export default ChatList;
