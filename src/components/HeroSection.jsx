import React from 'react';
import h from '../assets/h.jpg'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            كل احتياج <br />
            يستحق <span className="hero-highlight">استجابة</span>
          </h1>
          <p className="hero-subtitle">
            منصة لربط المبادرات الفردية والمجتمعية لتصل معاً إلى مجتمع متكامل ومتعاون في ميدان الإغاثة.
          </p>
          <div className="hero-btn-group">
            <button className="btn-primary">تقديم بلاغ</button>
            <button className="btn-secondary">اكتشف المبادرات</button>
          </div>
        </div>
        <div className="hero-image-side">
          <img className="hero-img-placeholder" src={h} alt="صورة توضيحية" />
            
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;