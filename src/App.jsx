import { useState } from 'react'
import './App.css'
import ChatList from './components/Chatlist'
import ChatBox from './components/ChatBox'


function App() {
  const usersList = [
    {username: "Kanom Pung", picture: "/bread.jpg"},
    {username: "Som Tam", picture: "/somtam.jpg"},
    {username: "Pad Thai", picture: "/padthai.jpg"}
  ]

  const messages = {
    "Kanom Pung": [
      { sender: "Kanom Pung", text: "Hello! How are you?" },
      { sender: "You", text: "I'm good, thanks! How about you?" },
      { sender: "Kanom Pung", text: "I'm great! Let's chat." }
    ],
    "Som Tam": [
      { sender: "Som Tam", text: "Hey there!" },
      { sender: "You", text: "Hi! What's up?" },
      { sender: "Som Tam", text: "Just chilling, let's talk!" }
    ],
    "Pad Thai": [
      { sender: "Pad Thai", text: "Good morning!" },
      { sender: "You", text: "Good morning! How's your day?" },
      { sender: "Pad Thai", text: "It's been awesome, just a little busy." }
    ]
  }

  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div>
      <div id='wrapper'>
        <ChatList usersList={usersList} onSelectedUser={setSelectedUser} />
        <ChatBox user={selectedUser} messages={messages} />
      </div>
    </div>
  )
}

export default App
