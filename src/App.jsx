import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import MainPage from "./Component/Main";
import Suggestion from "./Component/Suggestion";
import { AuthProvider } from "./Contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate, // 确保这一行被正确添加
} from "react-router-dom";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/suggestion" element={<Suggestion />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
