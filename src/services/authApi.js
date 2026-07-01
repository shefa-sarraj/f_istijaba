import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * 1. خدمة إنشاء حساب جديد (Register)
 */
export const registerUser = async (userData) => {
  try {
    // تم التعديل إلى /auth/register بناءً على هيكلية الباك إند في مشروعك
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("حدث خطأ في خدمة إنشاء الحساب:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

/**
 * 2. خدمة تسجيل الدخول (Login)
 */
export const loginUser = async (credentials) => {
  try {
    // تم التعديل إلى /auth/login تماماً كما ظهر في البوستمان
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    
    // حفظ التوكن في المتصفح إذا عادت البيانات بنجاح
    // انتبهي: في صورتك، التوكن كان داخل response.data.data.token
    if (response.data && response.data.data?.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    
    return response.data;
  } catch (error) {
    console.error("حدث خطأ في خدمة تسجيل الدخول:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};