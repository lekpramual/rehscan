import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
// import * as router from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";
// routes config
import routes from "../routes";
import DefaultAside from "../components/common/adminlayout/Aside";
import DefaultFooter from "../components/common/adminlayout/Footer";
import DefaultHeader from "../components/common/adminlayout/Header";

export default function DefaultLayout(props) {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">กำลังโหลดข้อมูล ...</div>
  );
  return (
    <div className="wrapper">
      <DefaultHeader />
      <DefaultAside />
      <div className="content-wrapper">
        {/* <Breadcrumb appRoutes={routes} router={router} /> */}
        <br />
        <Suspense fallback={loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect from="/" to="/scan/member-list" />
          </Switch>
        </Suspense>
        <ToastContainer />
      </div>
      <DefaultFooter />
    </div>
  );
}
