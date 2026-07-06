import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormHeroBanner from '../components/FormHeroBanner';
import CustomInput from '../components/CustomInput'; // تأكد من مسار الملف الصحيح لديك

function Form() {


  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phoneNumber: '',
    backupPhone: '',
    childrenCount: '',
    familyCount: '',
    membersCount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("البيانات المرسلة:", formData);
  };

  return (
    <div className="form-page-wrapper">
      <Header />
      <FormHeroBanner />
      <div className="form-section-header">
        <h3>بيانات مقدم الطلب</h3>
      </div>

      <form onSubmit={handleSubmit} className="custom-built-form">
        
        <div className="form-row full-width">
          <CustomInput
            color="white"
            label="اسم مقدم البلاغ رباعي"
            type="text"
            name="fullName"
            required={true}
            placeholder="مثال: محمد أحمد علي يوسف"
            value={formData.fullName}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"

          />
        </div>

        <div className="form-row split-row">
          <CustomInput
            color="white"
            label="رقم الهاتف"
            type="text"
            name="phoneNumber"
            placeholder="+9705X-XXX-XXX"
            value={formData.phoneNumber}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"
          />
          <CustomInput
            color="white"
            label="رقم الهوية"
            type="text"
            name="idNumber"
            required={true}
            placeholder="000-000-000"
            value={formData.idNumber}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"
          />
        </div>

        <div className="form-row split-row">
          <CustomInput
            color="white"
            label="عدد الأطفال (من سنتين إلى 12 سنة)"
            type="text"
            name="childrenCount"
            placeholder="•••"
            value={formData.childrenCount}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 , 13, 14, 15, 16, 17, 18, 19, 20]}
          />
          <CustomInput
            color="white"
            label="رقم هاتف احتياطي"
            type="text"
            name="backupPhone"
            placeholder=""
            value={formData.backupPhone}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"
          />
        </div>

        <div className="form-row split-row">
          <CustomInput
            color="white"
            label="عدد أفراد الأسرة"
            type="text"
            name="familyCount"
            required={true}
            placeholder="•••"
            value={formData.familyCount}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 , 13, 14, 15, 16, 17, 18, 19, 20]}

          />
          <CustomInput
            color="white"
            label="عدد الأفراد (من 13 إلى 18 سنة)"
            type="text"
            name="membersCount"
            placeholder="•••"
            value={formData.membersCount}
            onChange={handleChange}
            backgroundColor="transparent"
            border="2px solid #ffffff"
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 , 13, 14, 15, 16, 17, 18, 19, 20]}

          />
        </div>

        {/* زر الإجراءات أسفل الفورم */}
        <div className="form-footer-actions">
          <button type="submit" className="form-submit-btn">التالي</button>
        </div>

      </form>
      <Footer />
    </div>
  );
}

export default Form;



