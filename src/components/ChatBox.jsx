import { React, useState, useEffect } from "react";
import "./ChatBox.css";
import Microphone from "./icons/Microphone";
import AddImage from "./icons/AddImage";
import { mockMessages } from "../data/mockMessages";

const ChatBox = ({ user }) => {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");
  const messages = mockMessages;

  useEffect(() => {
    setChat(messages[user] || []);
  }, [user, messages]);

  if (!user) return;

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleSend = () => {
    if (text === "") return;

    const newMessage = { sender: "You", text };
    setChat([...chat, newMessage]);
    setText("");
  };

  return (
    <div id="chatbox-container">
      <div className="chatbox-header">
        <h4>{user}</h4>
      </div>
      <div className="chatbox">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={msg.sender == "You" ? "message me" : "message other"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbox-footer">
        <Microphone />
        <AddImage />
        <input
          className="message-input"
          type="text"
          placeholder="Write a message..."
          value={text}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key == "Enter") handleSend();
          }}
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
