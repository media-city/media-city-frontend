import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ChatPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="editprofile" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
