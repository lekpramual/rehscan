import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3 className="text-center">
                  <i className="fas fa-2x fa-arrow-circle-right" />
                </h3>
                {/* <p>ปลดล็อกHosxp</p> */}
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <Link to="#" className="small-box-footer">
                Hosxp Unlock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
