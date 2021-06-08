import React, { useEffect, useRef } from "react";

import ReactToPrint from "react-to-print";
import AuthService from "../../../../managers/AuthService";

import { useDispatch } from "react-redux";
import { LocationToPrint } from "./LocationToPrint";

const LocactionPrint = () => {
  const componentRef = useRef();

  const dispatch = useDispatch();
  const Auth = new AuthService("http://localhost:3000/");

  useEffect(() => {
    if (!Auth.loggedIn()) {
      window.location.replace("/rehscan/#/scan/member-register");
    }
  }, [Auth, dispatch]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body ">
                <ReactToPrint
                  trigger={() => <button>Print this out!</button>}
                  content={() => componentRef.current}
                  pageStyle="@page { size: 11.694in 8.264in landscape} "
                />
                <LocationToPrint ref={componentRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocactionPrint;
