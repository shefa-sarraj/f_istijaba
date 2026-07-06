import React from 'react';
import StatsCards from '../components/StatsCards';
import ReportsMap from '../components/ReportsMap';
import NeedsTable from '../components/NeedsTable';

const needsRows = [
  { governorate: 'شمال غزة', totalRequests: 50, mostNeeded: 'ملابس', emergencyCases: 15, percent: 70 },
  { governorate: 'مدينة غزة', totalRequests: 100, mostNeeded: 'ادوية للأمراض المزمنة', emergencyCases: 20, percent: 75 },
  { governorate: 'خانيونس', totalRequests: 100, mostNeeded: 'خزانات مياه', emergencyCases: 10, percent: 90 },
  { governorate: 'رفح', totalRequests: 150, mostNeeded: 'مياه صالحة للشرب', emergencyCases: 30, percent: 60 },
  { governorate: 'الوسطى', totalRequests: 200, mostNeeded: 'مدارس (نقاط تعليمية)', emergencyCases: 14, percent: 80 }
];

function Dashboard() {
  return (
    <div className="dashboard-wrapper">

      <header className="dashboard-header">
        <span className="avatar-placeholder"></span>
        <h1 className="dashboard-title">لوحة تحكم لتحليل الاحتياجات الناشئة</h1>
      </header>

      <main className="dashboard-main">
        <StatsCards
          totalBeneficiaries={5000}
          mostNeededAreasCount={50}
          responseRate={70}
        />

        {/* <ReportsMap apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} /> */}

        <NeedsTable rows={needsRows} />
      </main>

    </div>
  );
}

export default Dashboard;