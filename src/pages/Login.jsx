import React from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import ECG from "../components/ECG";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { useState , useEffect} from 'react';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);


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

    // كلمة المرور الصحيحة"حبدلها و اخدها من الداتا بيز"ـ 
    const correctPassword = "Sh@fa2026"; 

    if (!password.trim()) {
      setError('يجب الإدخال الإلزامي');
    } 
    else if (password !== correctPassword) {
      setError('كلمة المرور غير صحيحة');
    } 
    else {
      setError(''); 
      navigate('/PopupLogin'); 
    }
  };

  return (
    <div className="auth-card">
      <div className="logo-container">
        <ECG />
      </div>

      <h4 className="auth-title" >تسجيل الدخول</h4>
      <h6 className="auth-subtitle" >
سجّل دخولك لنتابع معاً تنظيم وتوجيه المساعدات للأسر الأكثر استحقاقاً </h6>

    <form onSubmit={handleLogin} noValidate>
        
        <CustomInput 
          label="اسم المؤسسة" 
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

        <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',width: '100%',marginBottom: '24px',marginTop: '4px',direction: 'rtl'}}>
        
          <label >
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            تذكرني
          </label>

          <Link to="/forgotPass" style={{color: '#346186',fontSize: '13px',textDecoration: 'none',fontWeight: '600',margin: 0,lineHeight: '1'}}>
           هل نسيت كلمة المرور؟
          </Link>
        </div>
        
        <PrimaryButton text="تسجيل الدخول" type="submit" />
      </form>
    </div>
  );
}

export default Login;