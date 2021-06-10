import React from "react";
import { useHistory } from "react-router-dom";
import { LocationToPrint } from "./LocationToPrint";

export const PrintLocation = () => {
  let history = useHistory();
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

                  <div className="col-6" style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      className="btn btn-default"
                      //onClick={handleShow}
                    >
                      <i className="fas fa-print" /> ปริ้นจุดสแกน{" "}
                    </button>
                  </div>
                </div>

                <LocationToPrint />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
