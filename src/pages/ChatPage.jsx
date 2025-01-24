import { useState } from "react";
import "./ChatPage.css";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";
import SideBar from "../components/SideBar";
import { mockUsers } from "../data/mockUsers";
import { mockMessages } from "../data/mockMessages";

const ChatPage = () => {
  const usersList = mockUsers;

  const messages = mockMessages;

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <div id="chat-wrapper">
        <ChatList usersList={usersList} onSelectedUser={setSelectedUser} />
        <ChatBox user={selectedUser} messages={messages} />
        <SideBar />
      </div>
    </div>
  );
};

export default ChatPage;
