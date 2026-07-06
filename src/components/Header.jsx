import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // استيراد أيقونات القائمة والإغلاق
import logowh from '../assets/logowh.png'; 
import avatar from '../assets/avatar.jpg'; 



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-container">

        <div className="header-logo">
          <img src={logowh} alt="Logo" />
        </div>
        

        <button className="menu-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        
        <nav className={`header-nav ${isOpen ? 'header-nav-open' : ''}`}>
          <a href="#home" className="header-link">الرئيسية</a>
          <a href="#reports" className="header-link">البلاغات</a>
          <a href="#about" className="header-link">من نحن</a>
          <a href="#initiatives" className="header-link">المبادرات</a>
          <button className="btn-primary">تواصل معنا</button>
        </nav>

        <div className="header-right">
          <img src={avatar} alt="Avatar" className="avatar-placeholder" />
        </div>


        
      </div>
    </header>
  );
};

export default Header;