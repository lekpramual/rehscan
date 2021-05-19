import React, { useEffect, useState } from "react";
import SearchMember from "../common/Search";
import ScanList from "./ScanList";
function Scan() {
  const [data, setData] = useState([]);

  // Confirm From Search
  const onConfirm = (msg, date_start, date_end) => {
    if (msg === "SearchList") {
      console.log(date_start, date_end);
    }
  };

  useEffect(() => {}, []);

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
