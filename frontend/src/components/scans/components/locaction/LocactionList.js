import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import QRcode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { indexLocation } from "../../../../reduxs/actions/ScanLocation";

import { LocationToPrint } from "./LocationToPrint";

const LocactionList = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();

  const [record, setRecord] = useState([]);

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
  }, [record]);

  // const TableList = () => {
  //   return (
  //     <div className="row">
  //       <div className="col-12 table table-responsive ">
  //         <table className="table table-bordered table-hover text-nowrap">
  //           <thead>
  //             <tr>
  //               <td>ลำดับ</td>
  //               <td>ละติจูด</td>
  //               <td>ลองติจูด</td>
  //               <td>สถานที่</td>
  //               <td>สถานะ</td>
  //               <td>คำสั่ง</td>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {iscount ? (
  //               isdata.map((rs, index) => {
  //                 return (
  //                   <tr key={rs.scan_id}>
  //                     <td>{index + 1}</td>
  //                     <td>{rs.latitude}</td>
  //                     <td>{rs.longitude}</td>
  //                     <td>{rs.scan_location}</td>
  //                     <td>
  //                       {rs.status_id === 1 ? (
  //                         <span className="badge bg-success">เปิดใช้งาน</span>
  //                       ) : (
  //                         <span className="badge bg-danger">ปิดใช้งาน</span>
  //                       )}
  //                     </td>
  //                     <td>
  //                       <ReactToPrint
  //                         trigger={() => (
  //                           <a href="javascript:;">
  //                             <button
  //                               className="btn btn-default"
  //                               onClick={() => setRecord(rs)}
  //                             >
  //                               <i className="fas fa-qrcode" />
  //                             </button>
  //                           </a>
  //                         )}
  //                         content={() => componentRef.current}
  //                         // onBeforePrint={() =>
  //                         //   // console.log(rs)
  //                         //   setRecord(rs)
  //                         // }
  //                         pageStyle="@page { size: 11.694in 8.264in landscape} "
  //                       />
  //                       {/* <div style={{ display: "none" }}>
  //                         <LocationToPrint ref={componentRef} record={record} />
  //                       </div> */}
  //                     </td>
  //                   </tr>
  //                 );
  //               })
  //             ) : (
  //               <tr key="emtpydata">
  //                 <td
  //                   style={{ verticalAlign: "middle" }}
  //                   colSpan="7"
  //                   className="text-center"
  //                 >
  //                   {indexStatus === "loading" ? (
  //                     <div className="overlay">
  //                       <i className="fas fa-2x fa-sync-alt fa-spin" />
  //                     </div>
  //                   ) : indexStatus === "failed" ? (
  //                     <p className="text-danger">{indexFailure}</p>
  //                   ) : (
  //                     "--- ไม่มีข้อมูล ---"
  //                   )}
  //                 </td>
  //               </tr>
  //             )}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      {JSON.stringify(record)}
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
                        <ReactToPrint
                          trigger={() => (
                            <a href="javascript:;">
                              <button
                                className="btn btn-default"
                                onClick={() => setRecord(rs)}
                              >
                                <i className="fas fa-qrcode" />
                              </button>
                            </a>
                          )}
                          content={() => componentRef.current}
                          pageStyle="@page { size: 11.694in 8.264in landscape} "
                        />
                        {/* <div style={{ display: "none" }}>
                          <LocationToPrint ref={componentRef} record={record} />
                        </div> */}
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

      <LocationToPrint ref={componentRef} record={record} />
    </div>
  );
};

export default LocactionList;
