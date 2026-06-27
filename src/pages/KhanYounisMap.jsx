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

function KhanYounisMap() {
  // 1. إحداثيات السنتر لمحافظة خانيونس (بالقرب من وسط البلد والقلعة)
  const khanYounisCenter = [31.3460, 34.3040];

  // 2. حدود جغرافية محكمة تحيط بمحافظة خانيونس بالكامل وتمنع الخروج منها
  // [الزاوية الجنوبية الغربية (أطراف الفخاري والمواصي مع رفح)، الزاوية الشمالية الشرقية (حدود القرارة والشرقية مع الوسطى)]
  const khanYounisBounds = [
    [31.2750, 34.2300], // الحد السفلي الأيسر (جنوب غرب)
    [31.4050, 34.3950]  // الحد العلوي الأيمن (شمال شرق)
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
        نطاق عمل المبادرات الميدانية - محافظة خانيونس
      </h3>
      
      <MapContainer 
        center={khanYounisCenter} 
        zoom={13} // 👈 زووم 13 ممتاز لجمع بلدات ومخيم وشرقية خانيونس في واجهة واحدة فوراً
        minZoom={12} // 👈 يسمح بالتصغير درجة واحدة إضافية لرؤية كامل المساحة الإقليمية الواسعة لخانيونس
        maxZoom={18} // 👈 يسمح بالتقريب لرؤية تفاصيل الحارات والشوارع بدقة
        maxBounds={khanYounisBounds} // 👈 يقفل حركة الخريطة داخل حدود المحافظة فقط
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

        <Marker position={khanYounisCenter}>
          <Popup>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '5px' }}>
              <strong style={{ color: '#2b6cb0', fontSize: '14px' }}>محافظة خانيونس</strong> <br />
              <span style={{ color: '#4a5568', fontSize: '12px' }}>تنظيم وتوزيع لجان العمل التطوعي بالمحافظة</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default KhanYounisMap;