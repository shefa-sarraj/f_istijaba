import React from 'react';
import PrimaryButton from './PrimaryButton';

function UpgradeBox() {
  return (
    <div className="upgrade-box-container">
      <h5>👑 ترقية حسابك إلى مبادر</h5>
      <p>
        قدم طلب ترقية لحسابك بعد مراجعة الادارة و موافقتها ستمكن من انشاء و ادارة الحملات الانسانية
      </p>
      <div className="upgrade-btn-wrapper">
        <PrimaryButton text="ترقية الحساب الان" backgroundColor="#346186" color="#fff" />
      </div>
    </div>
  );
}

export default UpgradeBox;