import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// حل مشكلة الأيقونة الافتراضية في Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function GazaCityMap() {
  const gazaCityCenter = [31.5150, 34.4550];
  const gazaCityBounds = [
    [31.4650, 34.3950], 
    [31.5450, 34.5100]  
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '15px', direction: 'rtl', width: '100%' }}>
      {/* حقن ستايل قاطِع لإصلاح بهتان وتداخل المربعات الناتجة عن تعارض الـ CSS */}
      <style>{`
        .leaflet-container {
          background-color: #fff !important;
        }
        .leaflet-tile {
          filter: brightness(1) contrast(1.1) !important; /* 👈 يرفع حِدة الألوان والأسماء ويمنع البهتان */
          opacity: 1 !important; /* 👈 يضمن عدم وجود أي شفافية مسببة للبهتان */
        }
        .leaflet-tile-loaded {
          load-opacity: 1 !important;
        }
      `}</style>

      <h3 style={{ marginBottom: '15px', fontFamily: 'sans-serif', color: '#2c3e50', fontWeight: 'bold' }}>
        نطاق عمل المبادرات الميدانية - محافظة غزة (مدينة غزة)
      </h3>
      
      <MapContainer 
        center={gazaCityCenter} 
        zoom={14} // 👈 رفعنا الزووم لـ 14 لتظهر أسماء الشوارع والحارات فوراً وبشكل حاد
        minZoom={13} 
        maxZoom={18} 
        maxBounds={gazaCityBounds} 
        maxBoundsViscosity={1.0} 
        style={{ 
          height: '550px', 
          width: '100%', 
          borderRadius: '16px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #cbd5e1'
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={gazaCityCenter}>
          <Popup>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
              <strong style={{ color: '#2b6cb0' }}>محافظة غزة</strong>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default GazaCityMap;