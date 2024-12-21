import { useState } from 'react'
import './App.css'
import ChatList from './components/Chatlist'
import ChatBox from './components/ChatBox'


function App() {

  return (
    <div id='wrapper'>
      <ChatList />
      <ChatBox />
    </div>
  )
}

export default App
