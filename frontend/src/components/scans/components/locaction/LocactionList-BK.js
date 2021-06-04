import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { LocationToPrint } from "./LocationToPrint";

import { useDispatch, useSelector } from "react-redux";
import { indexLocation } from "../../../../reduxs/actions/ScanLocation";

const LocactionList = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: 11.694in 8.264in landscape}"
  });

  const [record, setRecord] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.scanlocation.indexData);

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
                      <span>
                        {/* <ReactToPrint
                          trigger={() => (
                            <a href="javascript:;">
                              <i
                                className="fas fa-print"
                                onClick={() => setRecord(record)}
                              />
                            </a>
                          )}
                          content={() => this.componentRef}
                          pageStyle="@page { size: 11.694in 8.264in landscape} "
                        /> */}
                        <button onClick={handlePrint(rs)}>
                          Print this out!
                        </button>
                        <div style={{ display: "none" }}>
                          <LocationToPrint ref={componentRef} record={record} />
                        </div>
                      </span>
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
