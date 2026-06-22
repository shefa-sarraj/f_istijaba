
import React from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

function ResetPassword() {

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
      password: '',
      confirmPassword: ''
    });


  return (
    <div className="auth-card">
      <div className="logo-container">
        <img src={logo} alt="شعار منصة إستجابة" className="app-logo" />
      </div>

      <h2 className="auth-title">إعادة تعيين كلمة المرور</h2>
      <p className="auth-subtitle" style={{ marginBottom: '24px' }}>
        الرجاء إدخال كلمة المرور الجديدة وتأكيدها لحماية حسابكِ
      </p>

      <form onSubmit={handleResetSubmit}>
        <CustomInput 
          label="كلمة المرور الجديدة" 
          type="password" 
          placeholder="********" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <CustomInput 
          label="تأكيد كلمة المرور " 
          type="password" 
          placeholder="********" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />
        
        <div style={{ marginBottom: '24px' }}></div>

        <PrimaryButton text="حفظ كلمة المرور الجديدة" type="submit" />
      </form>

      <div style={{ marginTop: '8px', textAlign: 'center' }}>
              <Link to="/login" className="auth-subtitle"  style={{ textDecoration: 'none' , fontSize:"1rem" , color:"#000000"}}>
               العودة الى  <span style={{ color: '#346186' }}>تسجيل الدخول  </span>
              </Link>
      </div>
    </div>
  );
}

export default ResetPassword;