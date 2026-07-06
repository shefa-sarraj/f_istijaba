import React from 'react';

function ProgressBar({ percent }) {
  return (
    <div className="progress-bar-wrap">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }}>
          <span className="progress-thumb"></span>
        </div>
      </div>
      <span className="progress-percent">{percent}%</span>
    </div>
  );
}

function NeedsTable({ rows = [] }) {
  return (
    <div className="needs-table-wrapper">
      <div className="section-title">أكثر المناطق احتياجاً</div>

      <div className="needs-table-scroll">
        <table className="needs-table">
          <thead>
            <tr>
              <th>المحافظة</th>
              <th>إجمالي الطلبات</th>
              <th>الأكثر احتياجاً</th>
              <th>حالات الطوارئ</th>
              <th>نسبة الإنجاز</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td>{row.governorate}</td>
                <td>{row.totalRequests}</td>
                <td>{row.mostNeeded}</td>
                <td>{row.emergencyCases}</td>
                <td>
                  <ProgressBar percent={row.percent} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NeedsTable;

/*
مثال بيانات جاهز للاستخدام:

const sampleRows = [
  { governorate: 'شمال غزة', totalRequests: 50,  mostNeeded: 'ملابس',                  emergencyCases: 15, percent: 70 },
  { governorate: 'مدينة غزة', totalRequests: 100, mostNeeded: 'ادوية للأمراض المزمنة',  emergencyCases: 20, percent: 75 },
  { governorate: 'خانيونس',   totalRequests: 100, mostNeeded: 'خزانات مياه',            emergencyCases: 10, percent: 90 },
  { governorate: 'رفح',       totalRequests: 150, mostNeeded: 'مياه صالحة للشرب',       emergencyCases: 30, percent: 60 },
  { governorate: 'الوسطى',    totalRequests: 200, mostNeeded: 'مدارس (نقاط تعليمية)',    emergencyCases: 14, percent: 80 },
];

<NeedsTable rows={sampleRows} />
*/