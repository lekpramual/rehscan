import React, { useEffect, useState } from "react";
import ScanInOutList from "./ScanInOutList";
import SearchMember from "../common/ScanInOut";
import { useDispatch, useSelector } from "react-redux";

import { index } from "../../../../reduxs/actions/ScanUser";

function ScanInOut() {
  // เรียกใช้งาน รีดัก
  const dispatch = useDispatch();
  const scanuser = useSelector((state) => state.scanuser.currentScan);

  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  // Confirm From Search
  const onConfirm = (msg, isshow) => {
    console.log(isshow);
    setMsg(msg);
    setShow(isshow);
  };

  useEffect(() => {
    console.log("Reload ScanInOut...");
    dispatch(index());
  }, [dispatch]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="card">
          <code>{JSON.stringify(scanuser)}</code>
          <SearchMember confirm={onConfirm} />
          <div className="card-body">
            <ScanInOutList msg={msg} show={show} confirm={onConfirm} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScanInOut;
