import React from "react";
import { Link } from "react-router-dom";
import packageJson from "../../../../package.json";
export default function Register() {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/login" replace>
            <b>รพ. </b>ร้อยเอ็ด
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">ลงทะเบียนสมาชิกใหม่</p>
            <form action="#" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อ-สกุล"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="เบอร์โทร"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-phone" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="เลขบัตรประชาชน"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-id-card" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-info btn-block">
                    ลงทะเบียน
                  </button>
                </div>
              </div>
            </form>
            <p className="login-box-msg" style={{ marginTop: 20 }}>
              <b>เวอร์ชัน : </b> {packageJson.version}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
