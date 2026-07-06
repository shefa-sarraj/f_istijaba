import React, { useState } from 'react'; // 💡 تم إضافة useState هنا
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import ECG from "../components/ECG";
import { Link, useNavigate } from 'react-router-dom'; // 💡 تم إضافة useNavigate هنا
import logo from '../assets/logo.png'; 
// 1. استدعاء الدالة من السيرفيس
// import { handleBackendResetPassword } from '../services/authService'; 

function ResetPassword() {
  const navigate = useNavigate();
  
  // 2. إضافات الـ States المتوافقة مع الـ API
  const [currentPassword, setCurrentPassword] = useState(''); // الحقل المطلوب في الـ API
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  
  const [errors, setErrors] = useState({
    current_password: '',
    password: '',
    confirmPassword: ''
  });

  // 3. دالة معالجة الإرسال والـ Validation
  const handleResetSubmit = (e) => {
    e.preventDefault();
    setSuccess('');

    let currentErrors = { current_password: '', password: '', confirmPassword: '' };

    // فحص حقل كلمة المرور الحالية
    if (!currentPassword.trim()) {
      currentErrors.current_password = 'يجب إدخال كلمة المرور الحالية الإلزامية';
    }

    // فحص قوة كلمة المرور الجديدة
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      currentErrors.password = 'يجب الإدخال الإلزامي';
    } else if (!strongPasswordRegex.test(password)) {
      currentErrors.password = 'كلمة المرور ضعيفة تشمل (رقم، رمز، أحرف كابيتال وصغيرة)';
    }

    // فحص التطابق
    if (password !== confirmPassword) {
      currentErrors.confirmPassword = 'كلمة المرور غير متطابقة';
    }

    setErrors(currentErrors);

    // التوقف لو هناك خطأ فرونت إند
    if (currentErrors.current_password || currentErrors.password || currentErrors.confirmPassword) {
      return;
    }

    // تمرير البيانات للدالة النظيفة بالسيرفيس
    handleBackendResetPassword({
      passwordData: { current_password: currentPassword, password, confirmPassword },
      setLoading,
      setErrors,
      setSuccess,
      navigate
    });
  };

  return (
    <div className="auth-container">

    <div className="auth-card" >
      <div className="logo-container">
        <ECG />
      </div>

      <h2 className="auth-title">إعادة تعيين كلمة المرور</h2>
      <p className="auth-subtitle" style={{ marginBottom: '24px' }}>
        الرجاء إدخال بيانات كلمة المرور لتحديث حسابكِ وحمايته
      </p>

      <form onSubmit={handleResetSubmit} noValidate>
        
        {/* صندوق رسالة النجاح الأخضر */}
        {success && <div style={{ color: '#2ec4b6', backgroundColor: '#e6f9f8', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px', textAlign: 'center', fontWeight: '600' }}>{success}</div>}

        {/* 4. الحقل الجديد المضاف ليتطابق مع الـ API */}
        <CustomInput 
          label="كلمة المرور الحالية" 
          type="password" 
          placeholder="********" 
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          error={errors.current_password}
        />

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

        {/* زر متفاعل مع حالة الـ loading */}
        <PrimaryButton text={loading ? "جاري الحفظ..." : "حفظ كلمة المرور الجديدة"} type="submit" disabled={loading} />
      </form>

      <div style={{ marginTop: '8px', textAlign: 'center' }}>
        <Link to="/login" className="auth-subtitle" style={{ textDecoration: 'none' , fontSize:"1rem" , color:"#000000"}}>
          العودة الى <span style={{ color: '#346186' }}>تسجيل الدخول </span>
        </Link>
      </div>
    </div>
    </div>

  );
}

export default ResetPassword;