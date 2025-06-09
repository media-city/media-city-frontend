import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import { UserContext, UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<ChatPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
