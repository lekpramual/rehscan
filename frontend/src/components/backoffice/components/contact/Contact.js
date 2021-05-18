import React from "react";
import User2 from "../../../../assets/img/avatar.png";

export default function Contact() {
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row d-flex align-items-stretch">
              <div className="col-12 d-flex align-items-stretch">
                <div className="card bg-light">
                  <div className="card-header text-muted border-bottom-0">
                    ศูนย์คอมพิวเตอร์
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>นายประมวล นัดทะยาย</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>เกี่ยวกับ : </b> Web Designer / UX / Graphic Artist
                          / Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            สถานที่ : อาคารซ่อมบำรุง ชั้น 2 ศูนย์คอมพิวเตอร์
                            ห้องโปรแกรมเมอร์
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            เบอร์ภายใน #: + 8006
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={User2}
                          alt="images-profile"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
