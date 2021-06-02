import React, { useEffect } from "react";
import LocactionList from "./LocactionList";
import LocactionAdd from "./LocactionAdd";
import AuthService from "../../../../managers/AuthService";

function Locaction() {
  const Auth = new AuthService("http://localhost:3000/");

  const data = [];
  // Confirm From Search
  const onConfirm = (latitude, longitude, location) => {
    console.log(latitude, longitude, location);
  };

  useEffect(() => {
    if (!Auth.loggedIn()) {
      window.location.replace("/#/scan/member-register");
    }
  }, [Auth]);
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body ">
                <LocactionAdd confirm={onConfirm} />
                <LocactionList data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locaction;
