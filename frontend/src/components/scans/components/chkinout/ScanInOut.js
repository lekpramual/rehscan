import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Component
import ScanInOutList from "./ScanInOutList";
import SearchMember from "../common/ScanInOut";
// Action
import { createScanInOut } from "../../../../reduxs/actions/ScanInOut";
// LocalStore

import AuthService from "../../../../managers/AuthService";
import { profile as Profile } from "../common/profile";
import ErrorPage from "../../ErrorPage";
function ScanInOut() {
  const dispatch = useDispatch();
  const Auth = new AuthService("http://localhost:3000/");

  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  // Confirm From Search
  const onConfirm = (msg, isshow) => {
    console.log(isshow);
    console.log(msg);
    setMsg(msg);
    setShow(isshow);
  };

  const onConfirmScan = (msg, isshow, location, status) => {
    console.log(status);
    console.log(msg);
    setMsg(msg);
    setShow(isshow);
    // Scan success
    if (status) {
      const data = {
        userId: Auth.getProfile().id,
        checkType: msg === "chkin" ? "0" : "1",
        scanId: location
      };

      // dispatch(createScanInOut(data));

      let Create = new Promise(function (resolve, reject) {
        async function createMsg() {
          return await dispatch(createScanInOut(data)).then((res) => {
            // console.log(res);
            return res[0].msg;
          });
        }
        // get result by function
        (async function () {
          let resStatus = await createMsg();
          if (resStatus === "created successful") {
            resolve(true);
          } else {
            reject(false);
          }
        })();
      });

      // promiss status and msg
      Create.then((status) => {
        status
          ? setTimeout(() => {
              window.location.replace("/rehscan/#/scan/member-list");
            }, 500)
          : setTimeout(() => {
              window.location.reload();
            }, 500);
      }).catch((e) => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
    }
  };

  useEffect(() => {}, []);

  return Auth.loggedIn() ? (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <Profile />
        <div className="card">
          <SearchMember confirm={onConfirm} />
          <div className="card-body">
            <ScanInOutList msg={msg} show={show} confirm={onConfirmScan} />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <ErrorPage />
  );
}

export default ScanInOut;
