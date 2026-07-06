import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from './PrimaryButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function InitiativeCard({ title, description, imagePlaceholderColor }) {
  return (
    <motion.div 
      className="initiative-card" 
      variants={fadeInUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {/* مساحة الصورة الملونة مؤقتاً لحين ربط الصور الفعلية */}
      <div style={{ backgroundColor: imagePlaceholderColor, height: '150px', width: '100%' }}></div> 
      <div className="card-body">
        <h4>{title}</h4>
        <p>{description}</p>
        <PrimaryButton text="عرض تفاصيل المبادرة" backgroundColor="#1d4ed8" color="#fff" />
      </div>
    </motion.div>
  );
}

export default InitiativeCard;