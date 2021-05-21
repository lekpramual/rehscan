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

  return !props.isGeolocationAvailable ? (
    <ScanInOutMessage
      msg="--- เบราว์เซอร์ของคุณไม่รองรับ แนะนำ Chome---"
      alert="alert alert-warning"
    />
  ) : !props.isGeolocationEnabled ? (
    <div>
      <ScanInOutMessage
        msg="--- กรุณาเปิด GPS มือถือของท่าน &hellip; ---"
        alert="alert alert-warning"
      />
    </div>
  ) : props.coords ? (
    <>
      <div className="row">
        <div className="col-12">
          {props.coords.latitude.toFixed(4)} ||{" "}
          {qrscan !== undefined ? parseFloat(qrscan.latitude).toFixed(4) : 0}
          <br />
          {props.coords.longitude.toFixed(4)} ||{" "}
          {qrscan !== undefined ? parseFloat(qrscan.longitude).toFixed(4) : 0}
          <br />
          {props.show ? (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={(e) =>
                handleScan(
                  e,
                  setLatState(props.coords.latitude.toFixed(4)),
                  setLngState(props.coords.longitude.toFixed(4))
                )
              }
              style={{ width: "100%" }}
              // style={{ width: "200px", heigth: "200px" }}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="row" style={{ marginTop: 10 }}>
        {arePoints(
          {
            lat: props.coords.latitude.toFixed(4),
            lng: props.coords.longitude.toFixed(4)
          },
          {
            lat:
              qrscan !== undefined ? parseFloat(qrscan.latitude).toFixed(4) : 0,
            lng:
              qrscan !== undefined ? parseFloat(qrscan.longitude).toFixed(4) : 0
          },
          0.3
        ) ? (
          <div className="col-12">
            {props.show ? (
              <ScanInOutMessage
                msg="---  ระยะห่างจากจุดสแกน ไม่เกิน 100 เมตร &hellip;---"
                alert="alert alert-warning"
              />
            ) : (
              <ScanInOutMessage
                msg="บันทึกข้อมูลลงเวลาเรียบร้อย"
                alert="alert alert-success"
              />
            )}
          </div>
        ) : (
          <div className="col-12" style={{ textAlign: "center" }}>
            <ScanInOutMessage
              msg="---  ระยะห่างจากจุดสแกน ไม่เกิน 100 เมตร &hellip; ---"
              alert="alert alert-warning"
            />
          </div>
        )}
      </div>
    </>
  ) : (
    <div className="col-12" style={{ textAlign: "center" }}>
      <ScanInOutMessage
        msg="--- กำลังค้นหาตำแหน่ง &hellip; ---"
        alert="alert alert-info"
      />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 100,
    timeout: Infinity
  },
  userDecisionTimeout: 5000
})(ScanInOutList);
