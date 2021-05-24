import React, { useEffect } from "react";
import LocactionList from "./LocactionList";
import LocactionAdd from "./LocactionAdd";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Locaction() {
  //const [data, setData] = useState([]);

  const data = [];
  // Confirm From Search
  const onConfirm = (latitude, longitude, location) => {
    console.log(latitude, longitude, location);

    toast.success("ปรับปรุงข้อมูลเรียบร้อย", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  useEffect(() => {
    console.log("Reset ...");
  }, []);

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
