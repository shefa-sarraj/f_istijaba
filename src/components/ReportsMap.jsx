import React, { useMemo } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

// ألوان الدبابيس حسب مستوى الأولوية/الخطورة
const PIN_COLORS = {
  critical: '#e53935', // أحمر
  high: '#fb8c00',     // برتقالي
  medium: '#fdd835',   // أصفر
  low: '#43a047'        // أخضر
};

function buildPinIcon(color) {
  // دبوس SVG بسيط بلون حسب الأولوية
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42">
      <path d="M16 0C7.2 0 0 7.2 0 16c0 11 16 26 16 26s16-15 16-26c0-8.8-7.2-16-16-16z" fill="${color}" stroke="#ffffff" stroke-width="2"/>
      <circle cx="16" cy="16" r="6" fill="#ffffff"/>
    </svg>`;
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: typeof window !== 'undefined' && window.google
      ? new window.google.maps.Size(32, 42)
      : undefined,
    anchor: typeof window !== 'undefined' && window.google
      ? new window.google.maps.Point(16, 42)
      : undefined
  };
}

// عدّل الإحداثيات والبيانات حسب البلاغات الفعلية عندك
const defaultReports = [
  { id: 1, lat: 31.560, lng: 34.500, severity: 'critical', label: 'شمال غزة' },
  { id: 2, lat: 31.520, lng: 34.470, severity: 'high', label: 'مدينة غزة' },
  { id: 3, lat: 31.500, lng: 34.460, severity: 'high', label: 'مدينة غزة' },
  { id: 4, lat: 31.470, lng: 34.430, severity: 'medium', label: 'دير البلح' },
  { id: 5, lat: 31.430, lng: 34.390, severity: 'low', label: 'خانيونس' },
  { id: 6, lat: 31.360, lng: 34.310, severity: 'critical', label: 'رفح' }
];

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const defaultCenter = { lat: 31.46, lng: 34.42 };

function ReportsMap({ reports = defaultReports, apiKey }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: false
    }),
    []
  );

  return (
    <div className="reports-map-section">
      <div className="section-title">خريطة البلاغات</div>

      <div className="reports-map-card">
        {loadError && (
          <div className="map-status">تعذر تحميل الخريطة، تأكد من مفتاح الـ API</div>
        )}

        {!isLoaded && !loadError && (
          <div className="map-status">...جاري تحميل الخريطة</div>
        )}

        {isLoaded && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={10}
            options={options}
          >
            {reports.map((r) => (
              <MarkerF
                key={r.id}
                position={{ lat: r.lat, lng: r.lng }}
                icon={buildPinIcon(PIN_COLORS[r.severity] || PIN_COLORS.medium)}
                title={r.label}
              />
            ))}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default ReportsMap;