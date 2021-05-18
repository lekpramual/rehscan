import React, { useState, useEffect } from "react";
import arePoints from "./arePoints";
import QrReader from "react-qr-reader";
import { Redirect } from "react-router";
import { geolocated } from "react-geolocated";

import { toast } from "react-toastify";

import ScanInOutMessage from "./ScanInOutMessage";

import "react-toastify/dist/ReactToastify.css";
const ScanInOutList = (props) => {
  const [qrscan, setQrscan] = useState([]);
  const [show, setShow] = useState(true);

  const handleScan = (data, lat, lng) => {
    if (data !== null && data !== undefined) {
      console.log(data[0]["latitude"]);
      var obj = JSON.parse(data);

      setQrscan(obj);
      console.log(obj);
      arePoints(
        {
          lat: lat,
          lng: lng
        },
        {
          lat: obj.latitude,
          // state.qrscan !== undefined
          //   ? state.qrscan.latitude
          //   ? state.qrscan.latitude
          //   : 0,
          lng: obj.longitude
          // state.qrscan !== undefined
          //   ? state.qrscan.longitude
          //   : 0
        },
        0.2
      )
        ? props.confirm(props.msg, false)
        : setShow(true);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {}, [props.show, props.msg]);

  return props.msg === "chkin" || props.msg === "chkout" ? (
    !props.isGeolocationAvailable ? (
      <ScanInOutMessage
        msg="--- เบราว์เซอร์ของคุณไม่รองรับ แนะนำ Chome---"
        alert="alert alert-warning"
      />
    ) : !props.isGeolocationEnabled ? (
      <div>
        <ScanInOutMessage
          msg="--- กรุณาเปิด GPS มือถือของท่าน ---"
          alert="alert alert-warning"
        />
      </div>
    ) : props.coords ? (
      <>
        <div className="row">
          <div className="col-12">
            {props.show ? (
              <QrReader
                delay={300}
                onError={handleError}
                onScan={(e) =>
                  handleScan(
                    e,
                    props.coords.latitude.toFixed(4),
                    props.coords.longitude.toFixed(4)
                  )
                }
                style={{ width: "100%" }}
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
              lat: qrscan !== undefined ? qrscan.latitude : 0,
              lng: qrscan !== undefined ? qrscan.longitude : 0
            },
            0.2
          ) ? (
            <div className="col-12">
              {props.show ? (
                <ScanInOutMessage
                  msg="---  ระยะห่างจากจุดสแกน ไม่เกิน 200 เมตร ---"
                  alert="alert alert-warning"
                />
              ) : (
                <ScanInOutMessage
                  msg="บันทึกข้อมูลลงเวลาเรียบร้อย"
                  alert="alert alert-success"
                />
              )}

              {/* {_commitAutoSave()} */}
            </div>
          ) : (
            <div className="col-12" style={{ textAlign: "center" }}>
              <ScanInOutMessage
                msg="---  ระยะห่างจากจุดสแกน ไม่เกิน 200 เมตร ---"
                alert="alert alert-warning"
              />
            </div>
          )}
        </div>
      </>
    ) : (
      <div>กำลังค้นหาตำแหน่ง &hellip; </div>
    )
  ) : (
    <div className="col-12" style={{ textAlign: "center" }}>
      <ScanInOutMessage
        msg="--- กด สแกนเข้า - ออก เพื่อทำการสแกน ---"
        alert="alert alert-info"
      />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(ScanInOutList);
