import React, { useEffect } from "react";
import SearchMember from "../common/Search";
import ScanList from "./ScanList";

import AuthService from "../../../../managers/AuthService";
function Scan() {
  const Auth = new AuthService("http://localhost:3000/");
  // const [data, setData] = useState([]);
  const data = [];
  // Confirm From Search
  const onConfirm = (msg, date_start, date_end) => {
    if (msg === "SearchList") {
      console.log(date_start, date_end);
    }
  };

  useEffect(() => {
    if (!Auth.loggedIn()) {
      window.location.replace("/rehscan/#/scan/member-register");
    }
  }, [Auth]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <SearchMember confirm={onConfirm} />
              <div className="card-body">
                <ScanList data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scan;
