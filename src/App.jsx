import { useState } from 'react'
import './App.css'
import ChatList from './components/Chatlist'
import ChatBox from './components/ChatBox'
import { mockUsers } from './data/mockUsers'

function App() {
  const usersList = mockUsers

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

    ]
  }

  const [selectedUser, setSelectedUser] = useState(null)
  
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div id='wrapper'>
        <ChatList usersList={usersList} onSelectedUser={setSelectedUser} onSearch={handleSearch} search={search} />
        <ChatBox user={selectedUser} messages={messages} />
      </div>
    </div>
  )
}

export default App
