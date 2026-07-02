import { motion } from "framer-motion";
import logo from '../assets/logo.png'; 


export default function ECG() {
  const logoPath= "M 15 109 L 40 109 L 48 93 L 56 129 L 66 57 L 80 149 L 90 95 L 99 109 L 125 109";

  return (
    <div 
      className="logo-container" 
      style={{ 
        position: "relative", 
        display: "inline-block",
      }}
    >
      <img 
        src={logo}
        className="app-logo" 
        alt="شعار إستجابة" 
      />

      <svg 
        viewBox="0 0 160 120" 
        style={{
          position: "absolute",
          top: "12%", 
          right: "15%", 
          width: "25%", 
          height: "auto",
          overflow: "visible",
          zIndex: 2
        }}
      >
        <motion.path
          d={logoPath}
          stroke="#00E5FF" 
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="40 200" 
          animate={{ strokeDashoffset: [240, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            filter: "drop-shadow(0px 0px 5px #00E5FF)"
          }}
        />
      </svg>
    </div>
  );
}