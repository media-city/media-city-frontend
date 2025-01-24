import { useState } from "react";
import "./ChatPage.css";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";
import SideBar from "../components/SideBar";
import { mockUsers } from "../data/mockUsers";

const ChatPage = () => {
  const usersList = mockUsers;

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <div id="chat-wrapper">
        <ChatList usersList={usersList} onSelectedUser={setSelectedUser} />
        <ChatBox user={selectedUser} />
        <SideBar />
      </div>
    </div>
  );
};

export default ChatPage;
