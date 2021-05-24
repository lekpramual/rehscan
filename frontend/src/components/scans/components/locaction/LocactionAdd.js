import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Modal from "react-modal";
import { geolocated } from "react-geolocated";

import ScanInOutMessage from "../common/Message";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "500px",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function LocactionAdd(props) {
  var subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [location, setLocation] = useState({ value: "", isvalid: true });

  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "blue";
  }

  const closeModal = (e) => {
    setIsOpen(false);
    setLocation({ value: "", isvalid: true });
  };
  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (location.value === "") {
      setLocation({ value: "", isvalid: false });
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
        location.value
      );

      closeModal();
    }
  };

  useEffect(() => {
    console.log("Loading ...");
  }, []);

  return (
    <>
      <div className="row" style={{ marginBottom: 10 }}>
        <div className="col-12" style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-primary" onClick={openModal}>
            <i className="fas fa-plus" /> เพิ่มจุดสแกน{" "}
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>เพิ่มจุดสแกน</h2>

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
                value={location.value}
                onChange={(e) =>
                  setLocation({
                    value: e.target.value,
                    isvalid: true
                  })
                }
              />
            </div>
            <div className="form-group">
              <div className="modal-footer justify-content-between p-0">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={closeModal}
                >
                  ปิด
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  //data-dismiss={show !== "" ? "modal" : ""}
                >
                  บันทึก
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="col-12" style={{ textAlign: "center" }}>
            <ScanInOutMessage
              msg="--- กำลังค้นหาตำแหน่ง &hellip; ---"
              alert="alert alert-info"
            />
          </div>
        )}
      </Modal>
    </>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(LocactionAdd);
