import React, { useEffect, useState } from "react";
import SearchMember from "../common/SearchLocaction";
import LocactionList from "./LocactionList";
function Locaction() {
  const [data, setData] = useState([]);
  // Confirm From Search
  const onConfirm = (msg, service_value, service_label) => {
    if (msg === "SearchLocation") {
      console.log(service_value, service_label);
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
