import React from "react";

const LocactionList = (props) => {
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
      <div className="col-12 table table-responsive ">
        <table className="table table-bordered table-hover text-nowrap">
          <thead>
            <tr>
              <td>ลำดับ</td>
              <td>ละติจูด</td>
              <td>ลองติจูด</td>
              <td>สถานที่</td>
              <td>สถานะ</td>
              <td>คำสั่ง</td>
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

export default LocactionList;
