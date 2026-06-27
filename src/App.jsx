import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './index.css';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'; 
import PopupLogin from './pages/popupLogin';
import NorthGazaMap from './pages/NorthGazaMap';
import GazaCityMap from './pages/GazaCityMap';
import KhanYounisMap from './pages/KhanYounisMap';
import RafahMap from './pages/RafahMap';
import CentralGazaMap from './pages/CentralGazaMap';






function App() {

    return (
      <div className="auth-container">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgotPass" element={<ForgotPassword/>} />
          <Route path="/PopupLogin" element={<PopupLogin/>} />
          <Route path="/NorthGazaMap" element={<NorthGazaMap/>} />
          <Route path="/GazaCityMap" element={<GazaCityMap/>} />
          <Route path="/KhanYounisMap" element={<KhanYounisMap/>} />
          <Route path="/RafahMap" element={<RafahMap/>} />
          <Route path="/CentralGazaMap" element={<CentralGazaMap/>} />


        </Routes>
    </div>
    );


}

export default App;
