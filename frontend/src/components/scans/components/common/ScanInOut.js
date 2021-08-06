import React, { useState } from "react";
import memberchkinout from "../../../../assets/ico/003-fingerprint-2.svg";

function ScanInOut(props) {
  const [activebtn, setActivebtn] = useState(false);
  const [activebtn2, setActivebtn2] = useState(false);
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-md-6 col-12" style={{ padding: 2 }}>
          <button
            type="submit"
            className={
              activebtn
                ? "btn btn-success btn-lg btn-block"
                : "btn btn-default btn-lg btn-block"
            }
            onClick={() => {
              props.confirm("chkin", true);
              setActivebtn(true);
              setActivebtn2(false);
            }}
          >
            <img
              src={memberchkinout}
              alt="memberchk in"
              style={{
                width: 50,
                marginRight: 5,
                marginLeft: -7,
                paddingBottom: 2
              }}
            />
            <p>สแกนเข้า</p>
          </button>
        </div>
        <div className="col-md-6 col-12" style={{ padding: 2 }}>
          <button
            type="submit"
            className={
              activebtn2
                ? "btn btn-success btn-lg btn-block"
                : "btn btn-default btn-lg btn-block"
            }
            onClick={() => {
              props.confirm("chkout", true);
              setActivebtn2(true);
              setActivebtn(false);
            }}
          >
            <img
              src={memberchkinout}
              alt="memberchk out"
              style={{
                width: 50,
                marginRight: 5,
                marginLeft: -7,
                paddingBottom: 2
              }}
            />
            <p>สแกนออก</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScanInOut;
