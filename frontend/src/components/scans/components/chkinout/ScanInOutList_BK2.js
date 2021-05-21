import React, { useState, useEffect } from "react";
import arePoints from "./arePoints";
import QrReader from "react-qr-reader";
import { geolocated } from "react-geolocated";

import ScanInOutMessage from "./ScanInOutMessage";
import ScanInOutLocaction from "./ScanInOutLocaction";

import "react-toastify/dist/ReactToastify.css";
const ScanInOutList = (props) => {
  const [qrscan, setQrscan] = useState([]);
  const [loadLocation, setLoadLocation] = useState(false);
  const [count, setCount] = useState(0);
  const handleScan = (data, lat, lng) => {
    if (data !== null && data !== undefined) {
      var obj = JSON.parse(data);
      setQrscan(obj);
      setLoadLocation(!loadLocation);
      setCount(count + 1);
      console.log("Scan ...");
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    console.log("Reload ...");
  }, [props.show, props.msg]);

  return props.msg === "chkin" || props.msg === "chkout" ? (
    props.show ? (
      <>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={(e) => handleScan(e)}
          style={{ width: "100%" }}
        />

        <ScanInOutLocaction Reload={loadLocation} ScanCount={count} />
      </>
    ) : (
      ""
    )
  ) : (
    <h1>Not Submit</h1>
  );
};

export default ScanInOutList;
