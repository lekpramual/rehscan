import React from "react";
import member from "./assets/ico/014-fingerprint-9.svg";
import memberchkinout from "./assets/ico/013-fingerprint-8.svg";
import memberlocaction from "./assets/ico/001-fingerprint.svg";

const Scan = React.lazy(() => import("./components/scans/containers/Scan"));
const ScanInOut = React.lazy(() =>
  import("./components/scans/containers/ScanInOut")
);
const Locaction = React.lazy(() =>
  import("./components/scans/containers/Locaction")
);

const routes = [
  {
    path: "/scan/member-list",
    exact: true,
    name: "ข้อมูลสแกน",
    component: Scan,
    icon: member
  },
  {
    path: "/scan/member-chkinout",
    exact: true,
    name: "สแกนเข้า-ออก",
    component: ScanInOut,
    icon: memberchkinout
  },
  {
    path: "/scan/member-locaction",
    exact: true,
    name: "จุดสแกน",
    component: Locaction,
    icon: memberlocaction
  }
];

export default routes;
