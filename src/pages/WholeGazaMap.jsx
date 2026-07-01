import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// حل مشكلة الأيقونة الافتراضية في Vite
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});
L.Marker.prototype.options.icon = DefaultIcon;

// 1. كامبوننت فرعي مخصص لتحديث موقع وزووم الخريطة برمجياً عند التغيير
function ChangeView({ center, zoom }) {
  const map = useMap();
  // استخدام flyTo لإعطاء حركة انتقال سلسة وأنيميشن احترافي عند الانتقال
  map.flyTo(center, zoom, { duration: 1.5 });
  return null;
}

function WholeGazaMap() {
  // 2. بيانات المحافظات: السنتر، الزووم المناسب لها، ومعلومات العرض
  const provinces = {
    all: {
      name: "قطاع غزة كامل",
      center: [31.4220, 34.3900], // سنتر يتوسط القطاع بالكامل
      zoom: 11,
      desc: "عرض شامل لكافة المحافظات والمبادرات الميدانية"
    },
    north: {
      name: "محافظة شمال غزة",
      center: [31.5525, 34.4925],
      zoom: 14,
      desc: "مركز المبادرات وإدارة الحملات الإغاثية بالشمال"
    },
    gaza: {
      name: "محافظة غزة",
      center: [31.5158, 34.4452],
      zoom: 14,
      desc: "إدارة وتوزيع الحصص الإغاثية لمدينة غزة"
    },
    middle: {
      name: "المحافظة الوسطى",
      center: [31.4220, 34.3630],
      zoom: 13,
      desc: "متابعة وتوزيع المساعدات في المخيمات الوسطى"
    },
    khanyounis: {
      name: "محافظة خانيونس",
      center: [31.3460, 34.3040],
      zoom: 13,
      desc: "تنظيم وتوزيع لجان العمل التطوعي بخانيونس"
    },
    rafah: {
      name: "محافظة رفح",
      center: [31.2845, 34.2510],
      zoom: 14,
      desc: "غرفة العمليات المركزية لإغاثة النازحين برفح"
    }
  };

  // 3. الـ State المسؤول عن المحافظة المحددة حالياً (الافتراضي: قطاع غزة ككل)
  const [currentView, setCurrentView] = useState(provinces.all);

  // حدود قطاع غزة بالكامل لمنع سحب الخريطة بعيداً عن فلسطين
  const gazaFullBounds = [
    [31.2000, 34.1500], // أقصى الجنوب الغربي
    [31.6200, 34.6000]  // أقصى الشمال الشرقي
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '15px', direction: 'rtl', width: '100%' }}>
      <style>{`
        .leaflet-container { background-color: #fff !important; }
        .leaflet-tile { filter: brightness(1) contrast(1.1) !important; opacity: 1 !important; }
      `}</style>

      <h3 style={{ marginBottom: '10px', fontFamily: 'sans-serif', color: '#2c3e50', fontWeight: 'bold' }}>
        نظام غرف العمليات والمبادرات - {currentView.name}
      </h3>

      {/* 4. أزرار الفلترة والتحكم بالزووم */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
        {Object.keys(provinces).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentView(provinces[key])}
            style={{
              padding: '8px 16px',
              backgroundColor: currentView.name === provinces[key].name ? '#2b6cb0' : '#edf2f7',
              color: currentView.name === provinces[key].name ? 'white' : '#2d3748',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            {provinces[key].name}
          </button>
        ))}
      </div>
      
      <MapContainer 
        center={provinces.all.center} 
        zoom={provinces.all.zoom} 
        minZoom={10} 
        maxZoom={18} 
        maxBounds={gazaFullBounds}
        maxBoundsViscosity={1.0}
        style={{ 
          height: '550px', 
          width: '100%', 
          borderRadius: '16px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #cbd5e1'
        }}
      >
        {/* استدعاء مكون تغيير العرض وتمرير قيم الـ State الحالية له */}
        <ChangeView center={currentView.center} zoom={currentView.zoom} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 5. رسم علامات أو نقاط المبادرات الرئيسية لكل المحافظات */}
        {Object.keys(provinces).map((key) => {
          if (key === 'all') return null; // تخطي الخيار الشامل
          return (
            <Marker key={key} position={provinces[key].center}>
              <Popup>
                <div style={{ textAlign: 'right', fontFamily: 'sans-serif' }}>
                  <strong style={{ color: '#2b6cb0' }}>{provinces[key].name}</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>{provinces[key].desc}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default WholeGazaMap;