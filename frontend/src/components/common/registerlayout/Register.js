import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import AuthService from "../../../managers/AuthService";
import AsyncSelect from "react-select/async";

import packageJson from "../../../../package.json";

// Api
import { showUser } from "../../../reduxs/actions/ScanUser";
import { createRegister } from "../../../reduxs/actions/ScanRegister";

function Register(props) {
  const Auth = new AuthService();
  const dispatch = useDispatch();
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [phone, setPhone] = useState({ value: "", isValid: true });
  const [cid, setCid] = useState({ value: "", isValid: true });

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = (inputValue, callback) => {
    if (inputValue == null || inputValue.length < 3) {
      // not executing with less than 3 characters
      callback([]);
      return;
    }

    // load options in select
    return dispatch(showUser(inputValue)).then((response) => {
      let workers = [];
      if (response && !response.error) {
        response.map((res) => {
          return (workers = res.data.map((res) => {
            return { value: res.badgenumber, label: res.name };
          }));
        });
      }
      callback(workers);
    });
  };

  const formIsValidSearch = () => {
    let isGood = true;

    if (phone.value.length < 11) {
      phone.isValid = false;
      isGood = false;
    }

    if (cid.value.length < 17) {
      cid.isValid = false;
      isGood = false;
    }

    if (!isGood) {
      setPhone({
        ...phone
      });
      setCid({
        ...cid
      });
    }
    return isGood;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValidSearch()) {
      const data_token = {
        id: selectedValue.value,
        name: selectedValue.label,
        phone: phone.value
      };

      const data = {
        userid: selectedValue.value,
        name: selectedValue.label,
        phone: phone.value,
        cid: cid.value
      };

      let Create = new Promise(function (resolve, reject) {
        async function createRegisterMsg() {
          return await dispatch(createRegister(data)).then((res) => {
            return res[0].msg;
          });
        }
        // get result by function
        (async function () {
          let resRegister = await createRegisterMsg();

          if (resRegister === "created successful") {
            Auth.setToken(data_token);
            setTimeout(() => {
              window.location.replace("/rehscan/#/scan/member-chkinout");
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
              title: "??????????????????",
              text: "??????????????????????????????????????????????????? 1 ??????????????? 1 ?????????????????????",
              showConfirmButton: false,
              timer: 1500
            })
          : Swal.fire({
              // position: "top-center",
              icon: "warning",
              title: "?????????????????????",
              text: "????????????????????????????????????????????????",
              showConfirmButton: false,
              timer: 1500
            });
      }).catch((e) => {
        Swal.fire({
          // position: "top-center",
          icon: "error",
          title: "?????????????????????",
          text: "????????????????????????????????????????????????",
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  };

  useEffect(() => {
    if (Auth.loggedIn()) {
      // console.log(Auth.loggedIn());
      window.location.replace("/rehscan/#/scan/member-chkinout");
    }
  }, [Auth, dispatch]);

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/login" replace>
            <b>??????. </b>????????????????????????
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">????????????????????????????????????????????????????????????</p>
            <form className="mb-5" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <AsyncSelect
                      cacheOptions
                      defaultOptions
                      value={selectedValue}
                      getOptionLabel={(e) => e.label}
                      getOptionValue={(e) => e.value}
                      loadOptions={loadOptions}
                      // options={options}
                      onInputChange={handleInputChange}
                      onChange={handleChange}
                      placeholder="???????????? ????????????-????????????"
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          neutral50: "#ced4da" // Placeholder color
                        }
                      })}
                    />
                  </div>
                </div>
              </div>
              {/* <pre>
                Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}
              </pre> */}
              <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <InputMask
                      className={
                        phone.isValid === false
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="???????????? ????????????????????????"
                      mask="999-9999999"
                      maskChar={null}
                      value={phone.value}
                      onChange={(e) => setPhone({ value: e.target.value })}
                    />
                    <input type="hidden" value={inputValue} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    {phone.isValid === false ? (
                      <span id="tel-error" className="text-danger">
                        ???????????????????????????????????? ????????????????????????
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <InputMask
                      mask="9-9999-99999-99-9"
                      maskChar={null}
                      className={
                        cid.isValid === false
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="???????????? ??????????????????????????????????????????"
                      value={cid.value}
                      onChange={(e) => setCid({ value: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    {cid.isValid === false ? (
                      <span id="tel-error" className="text-danger">
                        ???????????????????????????????????? ??????????????????????????????????????????
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-info btn-block"
                    disabled={
                      selectedValue === null || phone === "" || cid === ""
                        ? true
                        : false
                    }
                  >
                    ???????????????????????????
                  </button>
                </div>
              </div>
            </form>
            <p className="login-box-msg" style={{ marginTop: 20 }}>
              <b>???????????????????????? : </b> {packageJson.version}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
