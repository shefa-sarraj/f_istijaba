
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import ECG from "../components/ECG";
import logo from '../assets/logo.png'; 
// import { handleBackendForgotPassword } from "../services/authService";

function ForgotPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
      email: ''
    });

  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState('');    

  const handleSendLink = (e) => {
  e.preventDefault();
  setSuccess(''); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    setErrors({ email: 'يجب الإدخال الإلزامي للبريد الإلكتروني' });
    return;
  } else if (!emailRegex.test(email)) {
    setErrors({ email: 'البريد الإلكتروني غير صالح' });
    return;
  }

  handleBackendForgotPassword({ email, setLoading, setErrors, setSuccess });
};

  return (
    <div className="auth-container">
    <div className="auth-card" className="auth-container">
          <div className="logo-container">
              <ECG  />
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
    </div>
  );
}

export default ForgotPassword;