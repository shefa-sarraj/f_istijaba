import React from 'react';
import { FiTrendingUp, FiTarget } from 'react-icons/fi';

function ResponseRing({ percent = 70, size = 64, stroke = 6 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="response-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#373D47"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#5BB1C8"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="response-ring-label">{percent}%</span>
    </div>
  );
}

function StatsCards({
  totalBeneficiaries = 5000,
  mostNeededAreasCount = 50,
  responseRate = 70
}) {
  return (
    <div className="stats-row">

      <div className="stat-card">
        <div className="stat-label">إجمالي المستفيدين</div>
        <div className="stat-value-row">
          <span className="stat-icon-badge stat-icon-blue">
            <FiTrendingUp size={16} />
          </span>
          <span className="stat-value">{totalBeneficiaries.toLocaleString()} مستفيد</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-label">المناطق الأكثر احتياجاً</div>
        <div className="stat-value-row">
          <span className="stat-icon-badge stat-icon-teal">
            <FiTarget size={16} />
          </span>
          <span className="stat-value">{mostNeededAreasCount}</span>
        </div>
      </div>

      <div className="stat-card stat-card-center">
        <div className="stat-label">معدل الاستجابة</div>
        <ResponseRing percent={responseRate} />
      </div>

    </div>
  );
}

export default StatsCards;