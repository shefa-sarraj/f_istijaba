import React from 'react';
import about from '../assets/about.png'; 


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div >
          <h2 className="about-title">من نحن؟</h2>
          <p className="about-desc">
            "استجابة" هي منصة إلكترونية تهدف إلى جمع الاحتياجات والبلاغات المجتمعية، وتحليلها للمساعدة في إنشاء مبادرات إنسانية مبنية على الاحتياجات الفعلية. كما تسهم في تنظيم العمل التطوعي وتحسين سرعة الاستجابة للمناطق الأكثر احتياجاً.
          </p>
        </div>
        <div >
          <div >
            <img src={about} style={{width:"700px" , paddingTop:"80px"}}/>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;