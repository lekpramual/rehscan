import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useHistory, useLocation } from "react-router-dom";
import { LocationToPrint } from "./LocationToPrint";

export const PrintLocation = () => {
  let history = useHistory();
  let location = useLocation();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body ">
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={history.goBack}
                    >
                      <i className="fas fa-angle-left" /> ย้อนกลับ{" "}
                    </button>
                  </div>

                  {location.state ? (
                    <div className="col-6" style={{ textAlign: "right" }}>
                      <button
                        type="button"
                        className="btn btn-default"
                        //onClick={handleShow}
                        onClick={handlePrint}
                      >
                        <i className="fas fa-print" /> ปริ้นจุดสแกน{" "}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {location.state ? (
                  <LocationToPrint ref={componentRef} record={location.state} />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <p className="text-warning">กดย้อนกลับ เพื่อปริ้นใหม่</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
