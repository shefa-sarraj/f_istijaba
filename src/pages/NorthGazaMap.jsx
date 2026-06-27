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

function NorthGazaMap() {
  // إحداثيات السنتر لمحافظة شمال غزة
  const northGazaCenter = [31.5525, 34.4925];

  // حدود جغرافية محكمة تحيط بمحافظة شمال غزة كاملة لمنع الخروج منها
  const northGazaBounds = [
    [31.5220, 34.4350], 
    [31.5850, 34.5450]  
  ];

  // إجبار الأبعاد على التحديث فور التحميل
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '15px', direction: 'rtl', width: '100%' }}>
      {/* 👈 إصلاح بهتان الخريطة والأسماء ومنع تعارض ملفات الـ CSS الخارجي */}
      <style>{`
        .leaflet-container {
          background-color: #fff !important;
        }
        .leaflet-tile {
          filter: brightness(1) contrast(1.1) !important; /* يزيد حدة ألوان الخريطة والخطوط */
          opacity: 1 !important; /* يمنع أي شفافية تسبب البهتان */
        }
        .leaflet-tile-loaded {
          load-opacity: 1 !important;
        }
      `}</style>

      <h3 style={{ marginBottom: '15px', fontFamily: 'sans-serif', color: '#2c3e50', fontWeight: 'bold' }}>
        نطاق عمل المبادرات الميدانية - محافظة شمال غزة
      </h3>
      
      <MapContainer 
        center={northGazaCenter} 
        zoom={14} // 👈 تم رفعه إلى 14 لتقريب الرؤية وظهور أسماء الشوارع والتفاصيل فوراً بدلاً من بهتانها عن بعد
        minZoom={13} 
        maxZoom={18} 
        maxBounds={northGazaBounds} 
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

        <Marker position={northGazaCenter}>
          <Popup>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '5px' }}>
              <strong style={{ color: '#e53e3e', fontSize: '14px' }}>محافظة شمال غزة</strong> <br />
              <span style={{ color: '#4a5568', fontSize: '12px' }}>مركز المبادرات وإدارة الحملات الإغاثية</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default NorthGazaMap;