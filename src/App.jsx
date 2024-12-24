import { useState } from 'react'
import './App.css'
import ChatList from './components/Chatlist'
import ChatBox from './components/ChatBox'


function App() {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div>
      <div id='wrapper'>
        <ChatList onSelectedUser={setSelectedUser} />
        <ChatBox user={selectedUser} />
      </div>
    </div>
  )
}

export default App
