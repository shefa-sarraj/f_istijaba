import React from 'react';
import banner from '../assets/banner.jpg'; // تأكد من مسار الصورة الصحيح لديك

function FormHeroBanner() {
  return (
    <div className="form-hero-banner">
      <img src={banner} alt="أسرة تطلب المساعدة" className="form-hero-img" />
      

      <div className="form-hero-overlay">
        <h2 className="form-hero-title">تسجيل بلاغ احتياج عائلي</h2>
        <p className="form-hero-desc">
          نحن هنا من أجلك، يرجى تزويدنا بالبيانات أدناه لضمان الحصول على
          المساعدة المناسبة في أقرب وقت ممكن، شكراً لتعاونكم.
        </p>
        <a href="#" className="form-hero-link">سجل في الاستجابة الآن</a>
      </div>
    </div>
  );
}

export default FormHeroBanner;