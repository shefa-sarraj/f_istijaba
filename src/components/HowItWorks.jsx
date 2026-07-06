import React from 'react';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: 'تقديم بلاغ', desc: 'يرسل المستخدم تفاصيل الاحتياج للمنصة.' },
    { id: 2, title: 'مراجعة البلاغ', desc: 'يتم التحقق من صحة المعلومات من قبل أدمن المنصة.' },
    { id: 3, title: 'استجابة عن طريق المبادرات', desc: 'التواصل مع صاحب البلاغ لتقديم الدعم وفق الإمكانيات.' }
  ];

  return (
    <section className="how-section">
      <h2 className="how-main-title">كيف تعمل المنصة؟</h2>
      <div className="how-grid">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
          
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            <div className="step-badge">{step.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;