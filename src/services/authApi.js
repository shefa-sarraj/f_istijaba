import axios from 'axios';

// جلب الرابط الأساسي من ملف الـ .env
const API_URL = import.meta.env.VITE_API_URL || 'https://your-api-domain.com/api';

/**
 * خدمة تسجيل الدخول
 */
export const handleBackendLogin = async ({ email, password, setLoading, setError, navigate, rememberMe }) => {
  setErrors(''); // تصفير الخطأ القديم
  setLoading(true);

  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    // التعامل مع ميزة "تذكرني" عند النجاح
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }

    console.log("تم تسجيل الدخول بنجاح:", response.data);
    navigate('/PopupLogin'); // الانتقال لصفحة النجاح

  } catch (error) {
    // إمساك الخطأ وتمريره مباشرة للـ State في الفرونت إند
    const errorText = error.response?.data?.message || error.response?.data || 'كلمة المرور أو البريد غير صحيح';
    setError(errorText);
  } finally {
    setLoading(false);
  }
};

/**
 * خدمة إنشاء حساب جديد
 */
export const handleBackendRegister = async ({ userData, setLoading, setErrors, navigate }) => {
  setLoading(true);

  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log("تم إنشاء الحساب بنجاح:", response.data);
    navigate('/popupLogin');

  } catch (error) {
    // إمساك الخطأ وتمريره مباشرة لخانة confirmPassword لتظهر كرسالة حمراء
    const errorText = error.response?.data?.message || error.response?.data || 'فشل إنشاء الحساب، يرجى المحاولة لاحقاً';
    setErrors(prev => ({
      ...prev,
      confirmPassword: errorText
    }));
  } finally {
    setLoading(false);
  }
};



/**
 * خدمة نسيت كلمة المرور
 */
export const handleBackendForgotPassword = async ({ email, setLoading, setErrors, setSuccess }) => {
  setLoading(true);
  
  // تصفير الأخطاء والرسائل القديمة قبل المحاولة الجديدة
  setErrors({ email: '' });
  setSuccess('');

  try {
    // إرسال الإيميل في الـ Body كما يتوقع الـ API تماماً
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    console.log("تم إرسال الرابط بنجاح:", response.data);
    
    // تمرير رسالة النجاح القادمة من السيرفر لعرضها للمستخدم
    setSuccess(response.data?.message || 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدكِ الإلكتروني بنجاح.');

  } catch (error) {
    // إمساك خطأ السيرفر وتمريره مباشرة لحقل الإيميل بالصفحة
    const errorText = error.response?.data?.message || error.response?.data || 'البريد الإلكتروني غير موجود أو حدث خطأ ما';
    setErrors({ email: errorText });
  } finally {
    setLoading(false);
  }
};



/**
 * خدمة إعادة تعيين كلمة المرور (رابط الإيميل الخارجي)
 */
export const handleBackendResetPassword = async ({ passwordData, setLoading, setErrors, setSuccess, navigate }) => {
  setLoading(true);
  setSuccess('');
  setErrors({ current_password: '', password: '', confirmPassword: '' });

  try {
    // إرسال البيانات بالأسماء التي يتوقعها الـ API الخاص بكِ
    const response = await axios.post(`${API_URL}/change-password`, {
      current_password: passwordData.current_password,
      new_password: passwordData.password,
      new_password_confirmation: passwordData.confirmPassword
    });

    console.log("تم تعديل كلمة المرور بنجاح:", response.data);
    setSuccess(response.data?.message || 'تم حفظ كلمة المرور الجديدة بنجاح!');
    
    // التوجيه لصفحة تسجيل الدخول بعد 3 ثوانٍ ليقرأ المستخدم رسالة النجاح
    setTimeout(() => navigate('/login'), 3000);

  } catch (error) {
    const backendErrors = error.response?.data?.errors;
    const generalMessage = error.response?.data?.message || 'حدث خطأ أثناء الحفظ، يرجى المحاولة لاحقاً';

    if (backendErrors) {
      setErrors({
        current_password: backendErrors.current_password?.[0] || '',
        password: backendErrors.new_password?.[0] || '',
        confirmPassword: backendErrors.new_password_confirmation?.[0] || ''
      });
    } else {
      setErrors(prev => ({ ...prev, current_password: generalMessage }));
    }
  } finally {
    setLoading(false);
  }
};