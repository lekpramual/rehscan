import React from "react";

const ScanMessage = () => {
  return (
    <div className="row" style={{ marginBottom: 10 }}>
      <div className="col-12">
        <div className="alert alert-info alert-dismissible">
          <h5>
            <i className="icon fas fa-info" /> ประกาศ !
          </h5>
          เรียน สมาชิกร้านค้าสวัสดิการ รพ.ร้อยเอ็ด ทุกท่าน
          ขณะนี้ท่านสามารถตรวจสอบยอดปันผลของร้านค้าสวัสดิการ ตามลิงค์ที่แนบมานี้
          โดยให้ใส่รหัสสมาชิก และชื่อสกุล ของแต่ละท่าน ร้านค้าสวัสดิการฯ
          ได้จัดสรรในส่วนของปันผลหุ้น 51.65% และเฉลี่ยคืนยอดซื้อ 12.59%
        </div>
      </div>
    </div>
  );
};

export default ScanMessage;
