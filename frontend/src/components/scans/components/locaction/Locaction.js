import React, { useEffect } from "react";
import Swal from "sweetalert2";
import LocactionList from "./LocactionList";
import LocactionAdd from "./LocactionAdd";
import AuthService from "../../../../managers/AuthService";

import { useDispatch } from "react-redux";
import { createLocation } from "../../../../reduxs/actions/ScanLocation";

function Locaction() {
  const dispatch = useDispatch();
  const Auth = new AuthService("http://localhost:3000/");

  // Confirm From Search
  const onConfirm = (latitude, longitude, location) => {
    const data = {
      lat: latitude,
      lon: longitude,
      scanName: location
    };
    let Create = new Promise(function (resolve, reject) {
      async function createMsg() {
        return await dispatch(createLocation(data)).then((res) => {
          return res[0].msg;
        });
      }
      // get result by function
      (async function () {
        let resStatus = await createMsg();
        if (resStatus === "created successful") {
          setTimeout(() => {
            window.location.reload();
          }, 1600);
          resolve(true);
        } else {
          reject(false);
        }
      })();
    });

    // promiss status and msg
    Create.then((status) => {
      status
        ? Swal.fire({
            // position: "top-center",
            icon: "success",
            title: "สำเร็จ",
            text: "ลงทะเบียนจุดสแกนเรียบร้อย",
            showConfirmButton: false,
            timer: 1500
          })
        : Swal.fire({
            // position: "top-center",
            icon: "warning",
            title: "ผิดพลาด",
            text: "ลงทะเบียนผิดพลาด",
            showConfirmButton: false,
            timer: 1500
          });
    }).catch((e) => {
      Swal.fire({
        // position: "top-center",
        icon: "error",
        title: "ผิดพลาด",
        text: "ลงทะเบียนผิดพลาด",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  useEffect(() => {
    if (!Auth.loggedIn()) {
      window.location.replace("/rehscan/#/scan/member-register");
    }
  }, [Auth, dispatch]);
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body ">
                <LocactionAdd confirm={onConfirm} />
                <LocactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locaction;
