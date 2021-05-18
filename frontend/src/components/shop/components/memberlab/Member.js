import React, { useEffect, useState } from "react";
import SearchMember from "../common/SearchByMember";
import Information from "../common/info-json";
import MemberList from "../member/MemberList";
import MemberMessage from "../member/MemberMessage";
function Member() {
  const [data, setData] = useState([]);

  // Confirm From Search
  const onConfirm = (msg, member_search) => {
    if (msg === "SearchMember") {
      const filterData =
        member_search !== ""
          ? Information.filter((row) => row.member_no === `${member_search}`)
          : "";

      setData(filterData);
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
                <MemberMessage />
                <MemberList data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Member;
