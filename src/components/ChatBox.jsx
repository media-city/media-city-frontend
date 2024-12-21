import React from 'react'
import './ChatBox.css'

const ChatBox = () => {
    const Messages = {
        "Kanom Pung": [
          { sender: "Kanom Pung", text: "Hello! How are you?" },
          { sender: "You", text: "I'm good, thanks! How about you?" },
          { sender: "Kanom Pung", text: "I'm great! Let's chat." },
        ],
        "Som Tam": [
          { sender: "Som Tam", text: "Hey there!" },
          { sender: "You", text: "Hi! What's up?" },
          { sender: "Som Tam", text: "Just chilling, let's talk!" },
        ],
        "Pad Thai": [
          { sender: "Pad Thai", text: "Good morning!" },
          { sender: "You", text: "Good morning! How's your day?" },
          { sender: "Pad Thai", text: "It's been awesome, just a little busy." },
        ]
    }

  return (
    <div id='chatbox-container'>
        <div className="chatbox-header">
            <h4>{Messages['Kanom Pung'][0].sender}</h4>
        </div>
        <div className="chatbox">

        </div>
        <div className="chatbox-footer">
            <input className='search-input' type="text" placeholder='Write a message...'/>
        </div>
    </div>
  )
}

export default ChatBox