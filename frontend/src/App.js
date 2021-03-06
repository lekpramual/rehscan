import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// Containers
const DefaultLayout = React.lazy(() => import("./containers/AdminLayout"));
const Registerlayout = React.lazy(() => import("./containers/Registerlayout"));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">กำลังดาวน์โหลด...</div>
);

// แบ่งแยก Layout ของเว็บแอพ
export default function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/"
            name="ScanInOut"
            render={() => <Redirect to="/scan/member-register" />}
          />
          <Route
            exact
            path="/scan/member-register"
            name="Register"
            render={(props) => <Registerlayout {...props} />}
          />
          <Route
            exact
            path="/scan/member-chkinout"
            name="chkinout"
            render={(props) => <DefaultLayout {...props} />}
          />
          <Route
            exact
            path="/scan/member-list"
            name="list"
            render={(props) => <DefaultLayout {...props} />}
          />
          <Route
            exact
            path="/scan/member-locaction"
            name="locaction"
            render={(props) => <DefaultLayout {...props} />}
          />
          <Route
            exact
            path="/scan/member-printlocation"
            name="printlocation"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
