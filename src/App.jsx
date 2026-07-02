import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './index.css';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'; 
import PopupLogin from './pages/popupLogin';



function App() {

    return (
      <div className="auth-container">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgotPass" element={<ForgotPassword/>} />
          <Route path="/PopupLogin" element={<PopupLogin/>} />
        </Routes>
    </div>
    );


}

export default App;