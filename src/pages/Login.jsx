import React, { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import ECG from "../components/ECG";
import { Link, useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';
// استدعاء دالة الربط النظيفة من السيرفيس
// import { handleBackendLogin } from '../services/authService'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. الفحص الأولي السريع في الفرونت إند
    if (!password.trim() || !email.trim()) {
      setError('يجب الإدخال الإلزامي لجميع الحقول');
      return;
    }

    // 2. تشغيل دالة السيرفيس السحرية وتمرير الأدوات لها لتتصرف بالخلفية
    handleBackendLogin({ email, password, setLoading, setError, navigate, rememberMe });
  };

  return (
    <div className="auth-container">
    <div className="auth-card"  >
      <div className="logo-container">
        <ECG />
      </div>
      <h4 className="auth-title">مرحبا بك في منصة إستجابة</h4>
      <h6 className="auth-subtitle">اهلا بك , سجل دخولك للوصول الى الحملات و الاحتياجات المجتمعية.</h6>

      <form onSubmit={handleLogin} noValidate>
        <CustomInput 
          label="البريد الإلكتروني" 
          type="email" 
          placeholder="r@gmail.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <CustomInput 
          label="كلمة المرور" 
          type="password" 
          placeholder="********" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px', marginTop: '4px', direction: 'rtl'}}>
          <label>
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            تذكرني
          </label>
          <Link to="/forgotPass" style={{color: '#346186', fontSize: '13px', textDecoration: 'none', fontWeight: '600'}}>
            نسيت كلمة المرور؟ 
          </Link>
        </div>
        
        <PrimaryButton text={loading ? "جاري الدخول..." : "تسجيل الدخول"} type="submit" disabled={loading} />
      </form>

      <p className="auth-subtitle" style={{ fontSize: '1rem', color: '#000000', marginTop: '8px', textAlign: 'center'}}>
        ليس لديكِ حساب؟
        <Link to="/register" style={{ color: '#346186', textDecoration: 'none', fontWeight: 'bold' }}> إنشاء حساب </Link>
      </p>
    </div>
    </div>
  );
}

export default Login;