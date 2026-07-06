import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function StepCard({ number, title, description }) {
  return (
    <motion.div 
      className="step-card" 
      variants={fadeInUp} 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="step-number">{number}</div>
      <h4>{title}</h4>
      <pre className="step-desc">{description}</pre>
    </motion.div>
  );
}

export default StepCard;