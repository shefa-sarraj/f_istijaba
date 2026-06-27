
import React ,{ useState } from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import { Link , useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

function ResetPassword() {

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
      password: '',
      confirmPassword: ''
    });


    const handleResetSubmit = (e) => {
        e.preventDefault();
        
        // الكود الخاص بكِ لإعادة تعيين كلمة المرور (مثلاً الاتصال بالـ API)
        console.log("تم إرسال البيانات");
    };

  return (
    <div className="auth-card">
      <div className="logo-container">
              <ECG />
      </div>

      <h2 className="auth-title">اعادة تعيين كلمة المرور</h2>
      <p className="auth-subtitle" style={{ marginBottom: '24px' }}>
       أدخل كلمة المرور الامنة لحسابك
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
              <Link to="/login"   style={{ textDecoration: 'none' }}>
              <span style={{ color: '#000000' }}>  العودة الى صفحة </span><span style={{ color: '#346186' }}>تسجيل الدخول</span>
              </Link>
      </div>
    </div>
  );
}

export default ResetPassword;