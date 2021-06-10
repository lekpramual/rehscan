import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchMember from "../common/Search";
import { showScan } from "../../../../reduxs/actions/ScanInOut";
import ScanList from "./ScanList";

import AuthService from "../../../../managers/AuthService";
import { profile as Profile } from "../common/profile";
function Scan() {
  const dispatch = useDispatch();
  const Auth = new AuthService("http://localhost:3000/");

  // Confirm From Search
  const onConfirm = (msg, date_start, date_end) => {
    if (msg === "SearchList") {
      console.log(date_start, date_end);
      dispatch(showScan(Auth.getProfile().id, date_start, date_end));
    }
  };

  useEffect(() => {
    if (!Auth.loggedIn()) {
      window.location.replace("/rehscan/#/scan/member-register");
    }
  }, [Auth, dispatch]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <Profile />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <SearchMember confirm={onConfirm} />
              <div className="card-body">
                <ScanList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scan;
