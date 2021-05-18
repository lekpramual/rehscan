import React, { useEffect, useState } from "react";
import ScanList from "./ScanInOutList";
import SearchMember from "../common/ScanInOut";

function ScanInOut() {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(true);
  // Confirm From Search
  const onConfirm = (msg, isshow) => {
    console.log(msg, isshow);
    setMsg(msg);
    setShow(isshow);
  };

  useEffect(() => {}, []);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="card">
          <SearchMember confirm={onConfirm} />
          <div className="card-body">
            <ScanList msg={msg} show={show} confirm={onConfirm} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScanInOut;
