import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // أيقونات أسهم السلايدر
import img1 from '../assets/img1.jpg'; 
import img2 from '../assets/img2.jpg'; 
import img3 from '../assets/img3.jpg'; 



const Initiatives = () => {
  const cards = [
    {
      id: 1,
      image: img1,
      title: 'مبادرة الترفيه والدعم النفسي السريع',
      desc: 'تنظيم يوم ترفيهي بسيط للأطفال داخل المخيمات يشمل ألعاباً حركية ورسماً وتوزيع هدايا رمزية.',
    },
    {
      id: 2,
      image: img2,
      title: 'مبادرة نبض الشفاء الميداني',
      desc: 'توفير الأدوية للأمراض المزمنة، مستلزمات العناية بالجروح (معقمات، شاش)، وأجهزة القياس المنزلية.',
    },
    {
      id: 3,
      image: img3,
      title: 'مبادرة خطوة ثمن لذوي الهمم',
      desc: 'توفير مستلزمات ذوي الإعاقة من كراسي متحركة وعكازات لمساعدة المتضررين والمصابين.',
    }
  ];

  return (
    <section className="init-section">
  <div className="init-top-row">
    <a href="#more" className="init-view-more">عرض المزيد</a>
    <div className="init-title-area">
      <h2 className="init-title">أبرز المبادرات</h2>
      <p className="init-subtitle">مساهم في تغيير حياة الآلاف في غزة عبر مبادراتنا المختارة بعناية</p>
    </div>
  </div>

  <div className="init-slider-wrapper">
    <button className="init-arrow-btn">
      <FiChevronRight size={20} />
    </button>
    
    <div className="init-cards-grid">
      {cards.map((card) => (
        <div key={card.id} className="init-card">
          <div className="init-img-container">
            <img src={card.image} alt={card.title} className="init-card-img" />
          </div>

          <div className="init-card-content">
            <h3 className="init-card-title">{card.title}</h3>
            <p className="init-card-desc">{card.desc}</p>
            <button className="init-card-btn">عرض تفاصيل المبادرة</button>
          </div>
        </div>
      ))}
    </div>

    <button className="init-arrow-btn">
      <FiChevronLeft size={20} />
    </button>
  </div>
</section>
  );
};

export default Initiatives;