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

function CentralGazaMap() {
  // 1. إحداثيات السنتر للمحافظة الوسطى (بالقرب من منطقة الزوايدة / شمال دير البلح ليتوسط المخيمات)
  const centralGazaCenter = [31.4220, 34.3630];

  // 2. حدود جغرافية محكمة تحيط بالمحافظة الوسطى بالكامل وتمنع الخروج منها
  // [الزاوية الجنوبية الغربية (أطراف دير البلح الساحلية مع خانيونس)، الزاوية الشمالية الشرقية (حدود جحر الديك والنصيرات مع وادي غزة)]
  const centralGazaBounds = [
    [31.3780, 34.2900], // الحد السفلي الأيسر (جنوب غرب)
    [31.4680, 34.4450]  // الحد العلوي الأيمن (شمال شرق)
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
      {/* حقن ستايل قاطِع لإصلاح بهتان وتداخل المربعات الناتجة عن تعارض الـ CSS */}
      <style>{`
        .leaflet-container {
          background-color: #fff !important;
        }
        .leaflet-tile {
          filter: brightness(1) contrast(1.1) !important; /* يرفع حِدة الألوان والأسماء ويمنع البهتان */
          opacity: 1 !important; /* يضمن عدم وجود أي شفافية مسببة للبهتان */
        }
        .leaflet-tile-loaded {
          load-opacity: 1 !important;
        }
      `}</style>

      <h3 style={{ marginBottom: '15px', fontFamily: 'sans-serif', color: '#2c3e50', fontWeight: 'bold' }}>
        نطاق عمل المبادرات الميدانية - المحافظة الوسطى
      </h3>
      
      <MapContainer 
        center={centralGazaCenter} 
        zoom={13} // 👈 زووم 13 ممتاز جداً لاستيعاب النصيرات والبريج والمغازي ودير البلح معاً في الشاشة
        minZoom={12} // 👈 يسمح بالتصغير قليلاً لرؤية الامتداد الجغرافي الكامل للمخيمات
        maxZoom={18} // 👈 يسمح بالتقريب الشديد لتفاصيل الحارات والشوارع الداخلية
        maxBounds={centralGazaBounds} // 👈 يقفل حركة الخريطة داخل حدود الوسطى فقط
        maxBoundsViscosity={1.0} // 👈 ارتداد فوري صلب يمنع السحب خارج النطاق
        style={{ 
          height: '550px', 
          width: '100%', 
          borderRadius: '16px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #cbd5e1'
        }}
      >
        {/* استخدام سيرفر OpenStreetMap الرسمي لضمان ظهور الأسماء العربية والألوان الواضحة */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={centralGazaCenter}>
          <Popup>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '5px' }}>
              <strong style={{ color: '#319795', fontSize: '14px' }}>المحافظة الوسطى</strong> <br />
              <span style={{ color: '#4a5568', fontSize: '12px' }}>متابعة وتوزيع المساعدات والمبادرات في المخيمات</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CentralGazaMap;