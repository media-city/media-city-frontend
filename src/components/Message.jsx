import React from "react";
import "./Message.css";

const Message = ({ msg }) => {
  return (
    <>
      <div className={msg.sender == "You" ? "message me" : "message other"}>
        {msg.text}
      </div>
      <div className={msg.sender == "You" ? "timestamp me" : "timestamp other"}>
        {msg.timestamp}
      </div>
    </>
  );
};

export default Message;
