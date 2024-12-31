import { useState } from 'react'
import './App.css'
import ChatList from './components/Chatlist'
import ChatBox from './components/ChatBox'
import { mockUsers } from './data/mockUsers'
import { mockMessages } from './data/mockMessages'
import SideBar from './components/SideBar'

function App() {
  const usersList = mockUsers

  const messages = mockMessages

  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div>
      <div id='wrapper'>
        <ChatList usersList={usersList} onSelectedUser={setSelectedUser} />
        <ChatBox user={selectedUser} messages={messages} />
        <SideBar />
      </div>
    </div>
  )
}

export default App
