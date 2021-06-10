import React from "react";
import AuthService from "../../../../managers/AuthService";
export const profile = () => {
  const Auth = new AuthService("http://localhost:3000/");
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <span className="text-muted">
              <i className="fas fa-user" /> {Auth.getProfile().name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
