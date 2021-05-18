import React, { useState } from "react";
import memberchkinout from "../../../../assets/ico/003-fingerprint-2.svg";

function ScanInOut(props) {
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-md-6 col-12" style={{ padding: 2 }}>
          <button
            type="submit"
            className="btn btn-default btn-lg btn-block"
            onClick={() => props.confirm("chkin", true)}
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
            className="btn btn-default btn-lg btn-block"
            onClick={() => props.confirm("chkout", true)}
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
