import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './index.css';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'; 
import PopupLogin from './pages/popupLogin';
import Home from "./pages/Home";
import Form from './pages/form';
import Dashboard from './pages/Dashboard';




function App() {

    return (
      <div >
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgotPass" element={<ForgotPassword/>} />
          <Route path="/PopupLogin" element={<PopupLogin/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/dashboard" element={<Dashboard/>} />



        </Routes>
    </div>
    );


}

export default App;