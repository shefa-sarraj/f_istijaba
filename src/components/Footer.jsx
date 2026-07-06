import React from 'react';
import { FiMail, FiPhone, FiFacebook } from 'react-icons/fi'; // أيقونات التواصل الاجتماعي والاتصال
import logowh from '../assets/logowh.png'; 


const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <div className="footer-info-row">
            <span>istijaba.gmail.com</span>
            <FiMail className="footer-icon" size={24} />
          </div>
          <div className="footer-info-row">
            <span>0567868920</span>
            <FiPhone className="footer-icon" size={24} />
          </div>
          <div className="footer-info-row">
            <span>istijaba</span>
            <FiFacebook className="footer-icon" size={24} />
          </div>
        </div>

        <div className="footer-col-links">
          <a href="#home">الرئيسية</a>
          <a href="#reports">البلاغات</a>
          <a href="#initiatives">المبادرات</a>
        </div>

        <div className="footer-col-brand">
          <div className="header-logo">
              <img src={logowh} alt="Logo" />
          </div>
          <p className="footer-tagline">
            بين نقرة على الشاشة وإغاثة في الميدان.. نصنع نبض الاستجابة.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;