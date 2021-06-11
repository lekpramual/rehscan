import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { indexLocation } from "../../../../reduxs/actions/ScanLocation";

// import { LocationToPrint } from "./LocationToPrint";

const LocactionList = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.scanlocation.indexData);
  const indexStatus = useSelector((state) => state.scanlocation.indexStatus);
  const indexFailure = useSelector((state) => state.scanlocation.indexFailure);

  function isCheckData() {
    let iscount;
    var isdata = [];
    state.map((rs) => {
      if (rs.data.length === 0) {
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
    dispatch(indexLocation());
  }, [dispatch]);

  return (
    <div>
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
                isdata.map((rs, index) => {
                  return (
                    <tr key={rs.scan_id}>
                      <td>{index + 1}</td>
                      <td>{rs.latitude}</td>
                      <td>{rs.longitude}</td>
                      <td>{rs.scan_location}</td>
                      <td>
                        {rs.status_id === 1 ? (
                          <span className="badge bg-success">เปิดใช้งาน</span>
                        ) : (
                          <span className="badge bg-danger">ปิดใช้งาน</span>
                        )}
                      </td>
                      <td>
                        <Link
                          to={{
                            pathname: `/scan/member-printlocation`,
                            state: rs
                          }}
                        >
                          <button
                            className="btn btn-default"
                            // onClick={() => setRecord(rs)}
                          >
                            <i className="fas fa-qrcode" />
                          </button>
                        </Link>
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
                    {indexStatus === "loading" ? (
                      <div className="overlay">
                        <i className="fas fa-2x fa-sync-alt fa-spin" />
                      </div>
                    ) : indexStatus === "failed" ? (
                      <p className="text-danger">{indexFailure}</p>
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
    </div>
  );
};

export default LocactionList;
