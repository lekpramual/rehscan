import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/th";
import { useDispatch, useSelector } from "react-redux";

import AuthService from "../../../../managers/AuthService";
import { showScan } from "../../../../reduxs/actions/ScanInOut";

moment.locale("th");

const ScanList = (props) => {
  const dispatch = useDispatch();
  const showscan = useSelector((state) => state.scanuser.showData);
  const showstatus = useSelector((state) => state.scanuser.showStatus);
  const Auth = new AuthService("http://localhost:3000/");

  function isCheckData() {
    let iscount;
    var isdata = [];
    showscan.map((rs) => {
      if (rs.lengtd === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        isdata = rs.data;
        return { iscount, isdata };
      }
    });
    return { iscount, isdata };
  }

  const { iscount, isdata } = isCheckData();
  useEffect(() => {
    dispatch(showScan(Auth.getProfile().id, null, null));
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-responsive p-0">
          <thead>
            <tr>
              <td style={{ width: "5%" }}>ลำดับ</td>
              <td style={{ width: "20%" }}>วันที่</td>
              <td style={{ width: "10%" }}>สถานที่</td>
              <td style={{ width: "10%" }}>สถานะ</td>
            </tr>
          </thead>
          <tbody>
            {iscount ? (
              isdata.map((rs, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{moment(rs.checktime).format("LLL")} น.</td>
                    <td>{rs.scan_location}</td>
                    <td>
                      {rs.checktype === "1" ? (
                        <span className="badge bg-success">ออก</span>
                      ) : (
                        <span className="badge bg-danger">เข้า</span>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr key="emtpydata">
                <td
                  style={{ verticalAlign: "middle" }}
                  colSpan="7"
                  className="text-center"
                >
                  {showstatus === "loading"
                    ? "ดาวน์โหลดข้อมูล ..."
                    : "--- ไม่มีข้อมูล ---"}
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
