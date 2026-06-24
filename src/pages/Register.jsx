import React from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';







function Register() {



  const navigate = useNavigate();

  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');



  const [errors, setErrors] = useState({

    phone: '',

    email: '',

    password: '',

    confirmPassword: ''

  });





const handleRegister = (e) => {

    e.preventDefault();



    let currentErrors = {

      phone: '',

      email: '',

      password: '',

      confirmPassword: ''

    };



    if (!phone.trim()) {

      currentErrors.phone = 'يجب الإدخال الإلزامي';

    }



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() && !emailRegex.test(email)) {

      currentErrors.email = 'البريد الإلكتروني لا يعمل';

    }



    //  فحص قوة كلمة المرور (شروط: رقم، رمز، أحرف كابيتال وصغيرة)

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   

    if (password) {

      if (!strongPasswordRegex.test(password)) {

        currentErrors.confirmPassword = 'كلمة المرور ضعيفة تشمل (رقم، رمز، أحرف، أحرف كابيتال)';

      }

      else if (password !== confirmPassword) {

        currentErrors.confirmPassword = 'كلمة المرور غير متطابقة';

      }

    }



    setErrors(currentErrors);

    if (

      currentErrors.phone === '' &&

      currentErrors.email === '' &&

      currentErrors.password === '' &&

      currentErrors.confirmPassword === ''

    ) {

      navigate('/popupLogin');

    }

  };



  return (

    <div className="auth-card">

      <div className="logo-container">

        <img src={logo} alt="شعار منصة إستجابة" className="app-logo" />

      </div>



      <h2 className="auth-title" style={{ textAlign:"center"}}>إنشاء حساب جديد</h2>

      <p className="auth-subtitle" style={{ marginBottom: '24px'  ,textAlign:"center"}}>

        انضمي إلينا في منصة إستجابة للعمل التطوعي والإنساني

      </p>



     

      <form onSubmit={handleRegister} noValidate>

        <CustomInput

          label="الاسم كاملاً"

          type="text"

          placeholder="محمد احمد"

        />



        <CustomInput

          label="رقم الهاتف"

          type="text"

          placeholder="+970"

          value={phone}

          onChange={(e) => setPhone(e.target.value)}

          error={errors.phone}

        />



        <CustomInput

          label="البريد الإلكتروني"

          type="email"

          placeholder="r@gmail.com"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

          error={errors.email}

        />

       

        <CustomInput

          label="كلمة المرور"

          type="password"

          placeholder="********"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          error={errors.password}

        />



        <CustomInput

          label="تأكيد كلمة المرور"

          type="password"

          placeholder="********"

          value={confirmPassword}

          onChange={(e) => setConfirmPassword(e.target.value)}

          error={errors.confirmPassword}

        />

       

        <div style={{ marginBottom: '20px' }}></div>



        <PrimaryButton text="إنشاء الحساب" type="submit" />

      </form>



      <p className="auth-subtitle" style={{fontSize:"1rem", color:"#000000" ,textAlign: 'center' }}>

        لديكِ حساب ؟{' '}

        <Link to="/login" style={{color: '#346186', textDecoration: 'none'}}>

          تسجيل الدخول

        </Link>

      </p>

    </div>

  );

}





export default Register; 

