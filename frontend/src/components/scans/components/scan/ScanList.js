import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/th";
import { useDispatch, useSelector } from "react-redux";

import AuthService from "../../../../managers/AuthService";
import { showScan } from "../../../../reduxs/actions/ScanInOut";

moment.locale("th");

const ScanList = (props) => {
  const dispatch = useDispatch();
  const showData = useSelector((state) => state.scanuser.showData);
  const showStatus = useSelector((state) => state.scanuser.showStatus);
  const showFailure = useSelector((state) => state.scanuser.showFailure);
  const Auth = new AuthService("http://localhost:3000/");

  function isCheckData() {
    let iscount;
    var isdata = [];
    showData.map((rs) => {
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
  }, []);

  return (
    <div className="row">
      <div className="col-12 table table-responsive ">
        <table className="table table-bordered table-hover text-nowrap">
          <thead>
            <tr>
              <td>ลำดับ</td>
              <td>วันที่</td>
              <td>เวลา</td>
              <td>สถานที่</td>
              <td>สถานะ</td>
            </tr>
          </thead>
          <tbody>
            {iscount ? (
              isdata.map((rs, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{moment(rs.checktime).format("ll")}</td>
                    <td>{moment(rs.checktime).format("HH:mm:ss")}</td>
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
                  {showStatus === "loading" ? (
                    <div className="overlay">
                      <i className="fas fa-2x fa-sync-alt fa-spin" />
                    </div>
                  ) : showStatus === "failed" ? (
                    <p className="text-danger">{showFailure}</p>
                  ) : (
                    "--- ไม่มีข้อมูล ---"
                  )}
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
