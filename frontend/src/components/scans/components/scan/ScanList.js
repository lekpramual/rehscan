import React from "react";

const ScanList = (props) => {
  function formatNumber(num) {
    const parseNumber = parseInt(num);
    const toLocale = parseNumber.toLocaleString();
    return toLocale;
  }
  function isCheckData() {
    let iscount;
    var isdata = [];
    props.data.map((rs) => {
      if (rs.lengtd === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        isdata = rs;
        return { iscount, isdata };
      }
    });
    return { iscount, isdata };
  }

  const { iscount, isdata } = isCheckData();
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-responsive p-0">
          <thead>
            <tr>
              <td style={{ width: "5%" }}>รหัส</td>
              <td style={{ width: "20%" }}>ชื่อสมาชิก</td>
              <td style={{ width: "15%" }}>เงินหุ้น</td>
              <td style={{ width: "10%" }}>ยอดซื้อ</td>
              <td style={{ width: "10%" }}>ปันผลหุ้น</td>
              <td style={{ width: "15%" }}>เฉลี่ยคืนยอดซื้อ</td>
              <td style={{ width: "20%" }}>จ่ายจริง</td>
            </tr>
          </thead>
          <tbody>
            {iscount ? (
              <tr key="isdata">
                <td>{isdata.member_no}</td>
                <td>{isdata.member_name}</td>
                <td>{formatNumber(isdata.member_money)}</td>
                <td>{formatNumber(isdata.member_sell)}</td>
                <td>{formatNumber(isdata.member_stock)}</td>
                <td>{formatNumber(isdata.member_buy)}</td>
                <td>{formatNumber(isdata.member_paid)}</td>
              </tr>
            ) : (
              <tr key="emtpydata">
                <td
                  style={{ verticalAlign: "middle" }}
                  colSpan="7"
                  className="text-center"
                >
                  {/* {(page - 1) * 20 + index + 1} */}
                  --- ไม่มีข้อมูล ---
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScanList;
