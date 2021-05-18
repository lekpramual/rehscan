import React from "react";
import { Link } from "react-router-dom";
import packageJson from "../../../../package.json";
export default function Login() {
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
            <p className="login-box-msg">Hosxp Login</p>
            <form action="#" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="ชื่อผู้ใช้งาน"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="รหัสผ่าน"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    <i className="fas fa-sign-in-alt" /> เข้าสู่ระบบ
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
