import React from "react";
import routes from "../../../routes";
import { Link, useLocation } from "react-router-dom";

function HeaderView() {
  const location = useLocation();
  var routename = "";
  var iconname = "";
  routes.map((route) => {
    if (route.path === location.pathname) {
      routename = route.name;
      iconname = route.icon;
    }
    return { routename, iconname };
  });

  //console.log(routename);
  return (
    <span className="text-muted">
      <img
        src={iconname}
        alt="dashboard Logo"
        style={{
          width: 30,
          marginRight: 5,
          marginLeft: -7,
          paddingBottom: 2
        }}
      />{" "}
      {routename}
    </span>
  );
}

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            to="#"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
      </ul>
      {/* Left navbar links */}
      <ul
        className="navbar-nav ml-auto d-none d-md-block"
        style={{ fontSize: 25, marginTop: -20 }}
      >
        <li className="nav-item ">
          <Link className="nav-link" to="#" style={{ color: "white" }}>
            {HeaderView()}
          </Link>
        </li>
      </ul>
      <ul
        className="navbar-nav ml-auto d-md-none"
        style={{ fontSize: 20, marginTop: -5 }}
      >
        <li className="nav-item ">
          <Link className="nav-link" to="#" style={{ color: "white" }}>
            {HeaderView()}
          </Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto"></ul>
    </nav>
  );
}
