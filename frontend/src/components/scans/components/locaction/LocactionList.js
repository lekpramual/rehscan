import React, { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";

import { useDispatch, useSelector } from "react-redux";

import { indexLocation } from "../../../../reduxs/actions/ScanLocation";

import { ComponentToPrint } from "./ComponentToPrint";

const LocactionList = () => {
  const componentRef = useRef();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.scanlocation.indexData);
  const indexStatus = useSelector((state) => state.scanlocation.indexStatus);

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

  const TableList = () => {
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
                        {/* <button
                          className="btn btn-default"
                          onClick={handlePrint}
                        >
                          <i
                            className="fas fa-qrcode"

                            // onChange={setRecord("Hello")}
                          />
                        </button> */}
                        <ReactToPrint
                          trigger={() => <button>Print this out!</button>}
                          content={() => componentRef.current}
                          // onBeforePrint={() => setRecord(rs)}
                          pageStyle="@page { size: 11.694in 8.264in landscape} "
                        />
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
                    {indexStatus === "loading"
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
  return (
    <>
      <TableList />
      <ComponentToPrint ref={componentRef} />
    </>
  );
};

export default LocactionList;
