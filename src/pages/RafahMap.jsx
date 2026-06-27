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

function RafahMap() {
  // 1. إحداثيات السنتر لمحافظة رفح (بالقرب من وسط البلد وميدان العودة)
  const rafahCenter = [31.2845, 34.2510];

  // 2. حدود جغرافية محكمة تحيط بمحافظة رفح بالكامل وتمنع الخروج منها
  // [الزاوية الجنوبية الغربية (الحدود الساحلية الجنوبية)، الزاوية الشمالية الشرقية (أطراف الشوكة والبيوك شمال شرق)]
  const rafahBounds = [
    [31.2400, 34.1800], // الحد السفلي الأيسر (جنوب غرب)
    [31.3200, 34.3350]  // الحد العلوي الأيمن (شمال شرق)
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
        نطاق عمل المبادرات الميدانية - محافظة رفح
      </h3>
      
      <MapContainer 
        center={rafahCenter} 
        zoom={14} // 👈 زووم 14 ممتاز لتقريب الرؤية وظهور أحياء ومخيمات رفح بوضوح فور التحميل
        minZoom={13} // 👈 يمنع تصغير الخريطة لكي لا تظهر أجزاء من خانيونس
        maxZoom={18} // 👈 يسمح بالتقريب الشديد لرؤية تفاصيل الشوارع والحارات بدقة
        maxBounds={rafahBounds} // 👈 يقفل حركة الخريطة داخل حدود رفح فقط
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

        <Marker position={rafahCenter}>
          <Popup>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '5px' }}>
              <strong style={{ color: '#e53e3e', fontSize: '14px' }}>محافظة رفح</strong> <br />
              <span style={{ color: '#4a5568', fontSize: '12px' }}>غرفة العمليات المركزية لإغاثة النازحين والمبادرات</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default RafahMap;
