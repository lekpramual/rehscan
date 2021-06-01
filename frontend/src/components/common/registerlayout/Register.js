import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";

import AsyncSelect from "react-select/async";
import { show } from "../../../reduxs/actions/ScanUser";
import packageJson from "../../../../package.json";
import AuthService from "../../../managers/AuthService";

export default function Register() {
  const Auth = new AuthService();
  const dispatch = useDispatch();
  // const scanuser = useSelector((state) => state.scanuser.currentScan);

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [phone, setPhone] = useState({ value: "", isValid: true });
  const [cid, setCid] = useState({ value: "", isValid: true });

  // handle input change event
  const handleInputChange = (value) => {
    console.log(value);
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    console.log(value);
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
    return dispatch(show(inputValue)).then((response) => {
      let workers = [];
      if (response && !response.error) {
        console.log(response);
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
      const data = {
        id: selectedValue.value,
        name: selectedValue.label,
        phone: phone.value
      };
      Auth.setToken(data);
    }
  };

  useEffect(() => {
    console.log("Reload ...");
  }, [dispatch]);

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/login" replace>
            <b>รพ. </b>ร้อยเอ็ด
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">ลงทะเบียนผู้สแกนใหม่</p>
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
                      placeholder="กรอก ชื่อ-สกุล"
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
                      placeholder="กรอก เบอร์โทร"
                      mask="999-9999999"
                      maskChar={null}
                      value={phone.value}
                      onChange={(e) => setPhone({ value: e.target.value })}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    {phone.isValid === false ? (
                      <span id="tel-error" className="text-danger">
                        กรุณาตรวจสอบ เบอร์โทร
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
                      placeholder="กรอก เลขบัตรประชาชน"
                      value={cid.value}
                      onChange={(e) => setCid({ value: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    {cid.isValid === false ? (
                      <span id="tel-error" className="text-danger">
                        กรุณาตรวจสอบ เลขบัตรประชาชน
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
                    ลงทะเบียน
                  </button>
                </div>
              </div>
            </form>
            <p className="login-box-msg" style={{ marginTop: 20 }}>
              <b>เวอร์ชัน : </b> {packageJson.version}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
