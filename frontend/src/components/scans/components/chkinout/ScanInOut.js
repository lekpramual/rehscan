import React, { useEffect, useState } from "react";
import ScanInOutLocaction from "./ScanInOutLocaction";
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
  }, [!show]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="card">
          <SearchMember confirm={onConfirm} />
          <div className="card-body">
            {/* {msg === "chkin" || msg === "chkout" ? (
              <ScanList msg={msg} show={show} confirm={onConfirm} />
            ) : (
              ""
            )} */}
            {show ? <ScanInOutLocaction /> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScanInOut;
