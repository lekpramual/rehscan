import React, { useEffect, useState } from "react";
import ScanInOutList from "./ScanInOutList";
import SearchMember from "../common/ScanInOut";

function ScanInOut() {
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
  }, []);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="card">
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
