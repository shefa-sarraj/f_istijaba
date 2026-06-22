
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import logo from '../assets/logo.png'; 

function ForgotPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
      email: ''
    });

  const handleSendLink = (e) => {
    e.preventDefault();
    alert('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدكِ الإلكتروني.');
  };

  return (
    <div className="auth-card">
          <div className="logo-container">
            <img src={logo} alt="شعار منصة إستجابة" className="app-logo" />
          </div>
    
          <h4 className="auth-title" style={{marginBottom:"20px"}} >نسيت كلمة المرور؟</h4>
        
      <p className="auth-subtitle"  >
        أدخل بريدك الإلكتروني المرتبط بحسابك<br />
        وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
      </p>

      <form onSubmit={handleSendLink}>
        <CustomInput 
          label="البريد الالكتروني" 
          type="email" 
          placeholder="r@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}  
        />
        
        <div style={{ marginBottom: '20px' }}></div>

        <PrimaryButton text="إرسال رابط اعادة التعيين" type="submit" />
      </form>

      <div style={{ marginTop: '8px', textAlign: 'center' }}>
        <Link to="/login" className="auth-subtitle"  style={{ textDecoration: 'none' , fontSize:"1rem" , color:"#000000"}}>
          العودة الى صفحة <span style={{ color: '#346186' }}>تسجيل الدخول</span>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;