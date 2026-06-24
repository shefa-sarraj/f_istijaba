import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import UpgradeBox from '../components/UpgradeBox';
import logo from '../assets/logo.png'; 
import userAvatar from '../assets/logo.png'; // ضعي هنا مسار صورة الشاب الحقيقية من ملفاتكِ

function Profile() {
  // الحالات الافتراضية للبيانات المعروضة بالتصوير
  const [name, setName] = useState('محمد أحمد');
  const [email, setEmail] = useState('moh@gmail.com');
  const [phone, setPhone] = useState('+970567849807');
  const [role, setRole] = useState('مستفيد');

  return (
    <div className="profile-page-container">
      
      {/* 1. البانر العلوي */}
      <div className="profile-banner"></div>

      {/* 2. حاوية المحتوى المشدودة للمنتصف */}
      <div className="profile-content-wrapper">
        
        {/* عنوان الصفحة وجملة الإدارة */}
        <div className="profile-title-section">
          <h2>الملف الشخصي</h2>
          <p>عرض و ادارة معلوماتك الشخصية</p>
        </div>

        {/* 3. الكرت الرئيسي الأزرق الفاتح */}
        <div className="profile-main-card">
          
          {/* قسم الصورة الشخصية الدائرية وزر الكاميرا */}
          <div className="avatar-container">
            <div className="avatar-wrapper">
              <img src={userAvatar} alt="الصورة الشخصية" className="avatar-image" />
              <button className="camera-badge" title="تغيير الصورة">📷</button>
            </div>
          </div>

          {/* 4. حقول معلومات الحساب */}
          <form onSubmit={(e) => e.preventDefault()}>
            
            <CustomInput 
              label="الاسم الكامل" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

            <CustomInput 
              label="البريد الالكتروني" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            <CustomInput 
              label="رقم الهاتف" 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />

            <CustomInput 
              label="المهمة" 
              type="text" 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
            />

            {/* زر تعديل الحساب الرئيسي */}
            <div style={{ marginTop: '24px' }}>
              <PrimaryButton 
                text="تعديل الملف الشخصي" 
                type="button" 
                backgroundColor="#346186" 
                color="#ffffff" 
              />
            </div>
          </form>

          {/* 5. مكوّن صندوق الترقية المنفصل */}
          <UpgradeBox />

        </div>
      </div>
    </div>
  );
}

export default Profile;