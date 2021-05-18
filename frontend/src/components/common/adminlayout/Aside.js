import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import AdminLTELogo from "../../../assets/ico/002-fingerprint-1.svg";
import member from "../../../assets/ico/014-fingerprint-9.svg";
import memberchkinout from "../../../assets/ico/013-fingerprint-8.svg";
import memberlocaction from "../../../assets/ico/001-fingerprint.svg";

function Aside(props) {
  const pathname = props.location.pathname;

  // const handleNavitem = (navItem) => {
  //   return pathname === navItem
  //     ? "nav-item has-treeview menu-open"
  //     : "nav-item has-treeview";
  // };

  const handleNavLink = (navLink) => {
    return pathname === navLink ? "nav-link active" : "nav-link";
  };

  useEffect(() => {}, [pathname]);

  const ChildMenu = () => {
    return (
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <Link
              to="/scan/member-chkinout"
              className={handleNavLink("/scan/member-chkinout")}
              replace
            >
              <img
                src={memberchkinout}
                alt="memberchk inout"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2
                }}
              />
              <p style={{ fontWeight: "bold" }}> สแกนเข้า-ออก </p>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/scan/member-list"
              className={handleNavLink("/scan/member-list")}
              replace
            >
              <img
                src={member}
                alt="dashboard Logo"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2
                }}
              />
              <p style={{ fontWeight: "bold" }}> ข้อมูลสแกน </p>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/scan/member-locaction"
              className={handleNavLink("/scan/member-locaction")}
              replace
            >
              <img
                src={memberlocaction}
                alt="member locaction"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2
                }}
              />
              <p style={{ fontWeight: "bold" }}> จุดสแกน </p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <aside className="main-sidebar elevation-4 sidebar-light-warning">
      {/* Brand Logo */}
      <Link to="/scan/member-list" className="brand-link">
        <img
          src={AdminLTELogo}
          alt="AdminLTELogo Logo"
          className="brand-image elevation-3"
          style={{
            width: 35,
            marginRight: 5,
            marginLeft: 10,
            paddingBottom: 2
          }}
        />
        <span className="brand-text font-weight-light">Scan101 REH</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        <ChildMenu />
      </div>
    </aside>
  );
}
export default withRouter(Aside);
