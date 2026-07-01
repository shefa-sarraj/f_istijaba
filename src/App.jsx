import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'; 
import PopupLogin from './pages/popupLogin';
import NorthGazaMap from './pages/NorthGazaMap';
import WholeGazaMap from './pages/WholeGazaMap';
import KhanYounisMap from './pages/KhanYounisMap';
import RafahMap from './pages/RafahMap';
import CentralGazaMap from './pages/CentralGazaMap';
import NeedReport from './pages/NeedReport';







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
          <Route path="/WholeGazaMap" element={<WholeGazaMap/>} />
          <Route path="/KhanYounisMap" element={<KhanYounisMap/>} />
          <Route path="/RafahMap" element={<RafahMap/>} />
          <Route path="/CentralGazaMap" element={<CentralGazaMap/>} />
          <Route path="/NeedReport" element={<NeedReport/>} />

          


        </Routes>
    </div>
    );


}

export default App;
