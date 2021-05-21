import React, { useState, useEffect } from "react";
import arePoints from "./arePoints";
import QrReader from "react-qr-reader";
import { geolocated } from "react-geolocated";

import ScanInOutMessage from "./ScanInOutMessage";

import "react-toastify/dist/ReactToastify.css";
const ScanInOutList = (props) => {
  const [qrscan, setQrscan] = useState([]);
  const [latState, setLatState] = useState(0);
  const [lngState, setLngState] = useState(0);

  const handleScan = (data, lat, lng) => {
    if (data !== null && data !== undefined) {
      var obj = JSON.parse(data);
      setQrscan(obj);
      //setLatState(lat);
      //setLngState(lng);

      console.log(obj.latitude);
      arePoints(
        {
          lat: latState,
          lng: lngState
        },
        {
          lat: obj.latitude,
          lng: obj.longitude
        },
        0.2
      )
        ? props.confirm(props.msg, false)
        : props.confirm(props.msg, true);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {}, [props.show]);

  return <h1>Hello</h1>;
};

export default ScanInOutList;
