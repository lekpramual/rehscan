import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// Containers
const DefaultLayout = React.lazy(() => import("./containers/AdminLayout"));
const LoginLayout = React.lazy(() => import("./containers/Loginlayout"));

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
            path="/backoffice/login"
            name="Login"
            render={(props) => <LoginLayout {...props} />}
          />
          <Route
            path="/"
            name="Dashboard"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
