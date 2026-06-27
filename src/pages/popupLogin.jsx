import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import ECG from "../components/ECG";
import logo from '../assets/logo.png'; 
import success from '../assets/success.png'; 


function popupLogin() {
  const handleSendLink = (e) => {
    e.preventDefault();
    alert('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدكِ الإلكتروني.');
  };

  return (
    <div className="auth-card">
          <div className="logo-container">
                  <ECG />
          </div>

          <div className="logo-container">
            <img src={success} alt="success" className="success" />
          </div>
    
          <h4 className="auth-title" style={{marginBottom:"20px"}} >تم تسجيل الدخول بنجاح</h4>
        
      <p className="auth-subtitle"  >
       دعنا نوجّه الدعم اليوم لمن ينتظرنا في الميدان      </p>

      

        <PrimaryButton text="الذهاب الى الصفحة الرئيسية" type="button" />


    </div>
  );
}

export default popupLogin;