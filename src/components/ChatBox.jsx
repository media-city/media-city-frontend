import React from 'react'
import './ChatBox.css'

const ChatBox = ({ user, messages}) => {
    if (user == null) {
        return
    }

  return (
    <div id='chatbox-container'>
        <div className="chatbox-header">
            <h4>{user}</h4>
        </div>
        <div className="chatbox">
                {
                    messages[user].map((msg, index) => (
                        <div key={index} className={msg.sender == "You" ? "message me" : "message other"}>
                            {msg.text}
                        </div>
                    ))
                }
        </div>
        <div className="chatbox-footer">
            <input className='message-input' type="text" placeholder='Write a message...'/>
            <button className='send-button'>Send</button>
        </div>
    </div>
  )
}

export default ChatBox