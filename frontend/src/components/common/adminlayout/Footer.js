import React from "react";
import { Link } from "react-router-dom";
import packageJson from "../../../../package.json";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>เวอร์ชัน </b> {packageJson.version}
      </div>
      <strong>
        Copyright © 2020 ศูนย์คอมพิวเตอร์{" "}
        {/* <Link
          to="route"
          target="_blank"
          onClick={(event) => {
            event.preventDefault();
            window.open("http://reh.go.th");
          }}
        >
          รพ. ร้อยเอ็ด
        </Link> */}
        <Link to="/shop/memberlab">รพ. ร้อยเอ็ด</Link>
      </strong>
    </footer>
  );
}
