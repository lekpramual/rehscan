import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="content-wrapper" style={{ minHeight: 2836 }}>
      {/* Main content */}
      <section className="content">
        <div className="error-page">
          <h2 className="headline text-warning"> 404</h2>
          <div className="error-content">
            <h3>
              <i className="fas fa-exclamation-triangle text-warning" />{" "}
              แจ้งเตือน ! . กรุณาเข้าสู่ระบบ
            </h3>
            <p>
              <Link to="/scan/member-register">คลิกเพื่อเข้าสู่ระบบ</Link>
            </p>
          </div>
          {/* /.error-content */}
        </div>
        {/* /.error-page */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default ErrorPage;
