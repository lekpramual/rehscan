import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Modal, Button } from "react-bootstrap";
import { geolocated } from "react-geolocated";

import ScanInOutMessage from "../common/Message";

function LocactionAdd(props) {
  const [location, setLocation] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (location === "") {
      setLocation("");
      isGood = false;
    }
    return isGood;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValidSearch()) {
      props.confirm(
        props.coords.latitude.toFixed(4),
        props.coords.longitude.toFixed(4),
        location
      );

      // Hide Popup
      setShow(false);
      setLocation("");
    }
  };

  useEffect(() => {
    console.log("Loading ...");
  }, [show]);

  return (
    <>
      <div className="row" style={{ marginBottom: 10 }}>
        <div className="col-12" style={{ textAlign: "right" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShow}
          >
            <i className="fas fa-plus" /> เพิ่มจุดสแกน{" "}
          </button>
        </div>
      </div>

      {!props.isGeolocationAvailable ? (
        <ScanInOutMessage
          msg="--- เบราว์เซอร์ของคุณไม่รองรับ แนะนำ Chome---"
          alert="alert alert-warning"
        />
      ) : !props.isGeolocationEnabled ? (
        <ScanInOutMessage
          msg="--- กรุณาเปิด GPS มือถือของท่าน &hellip; ---"
          alert="alert alert-warning"
        />
      ) : props.coords ? (
        <div className="row">
          <div className="col-12">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>เพิ่มจุดสแกน</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="InputMember" className="col-form-label">
                      {" "}
                      ละติจูด
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ละติจูด"
                      value={props.coords.latitude.toFixed(4)}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputMember" className="col-form-label">
                      {" "}
                      ลองติจูด
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ลองติจูด"
                      value={props.coords.longitude.toFixed(4)}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputMember" className="col-form-label">
                      {" "}
                      สถานที่ {location.isvalid}
                    </label>
                    <input
                      type="text"
                      // className="form-control"
                      className={classNames("form-control", {
                        "form-control is-invalid": location.isvalid === false
                      })}
                      placeholder="สถานที่"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer className="modal-footer justify-content-between p-0">
                <Button variant="secondary" onClick={handleClose}>
                  ปิด
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) => handleSubmit(e)}
                  disabled={location === "" ? true : false}
                >
                  บันทึก
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      ) : (
        <div className="col-12" style={{ textAlign: "center" }}>
          <ScanInOutMessage
            msg="--- กำลังค้นหาตำแหน่ง &hellip; ---"
            alert="alert alert-info"
          />
        </div>
      )}
    </>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(LocactionAdd);
