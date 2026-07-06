import React from 'react';

const Sectionhform = () => {
  return (
    <header className="headerContainer">
      {/* ملاحظة للمطور: 
        الخلفية هنا تحتوي على دمج لصور أشخاص مع إضاءة زرقاء خافتة.
        قم بوضع ملف الصورة الأصلي في مجلد assets واستبدل المسار في ملف CSS.
        الأبعاد المقترحة للصورة الأصلية: 1200px × 300px
      */}
      
        <div className="contentWrapper">
          <img src="" alt="Background" />
          <h1 className="mainTitle">
            تسجيل <span className="highlight">بلاغ</span> احتياج عاجل
          </h1>
          <p className="subDescription">
            نحن هنا من أجلكم. يرجى تزويدنا بالبيانات بدقة لضمان وصول المساعدة إليكم بأسرع وقت ممكن. صوتك مسموع، والاستجابة تبدأ منك.
          </p>
        </div>
      
    </header>
  );
};

export default Sectionhform;