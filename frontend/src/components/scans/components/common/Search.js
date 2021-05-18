import React, { useState } from "react";
import classNames from "classnames";

function Search(props) {
  const initialState = {
    member: { value: "", isValid: true },
    membername: { value: "", isValid: true }
  };
  // set state with formdefaults
  const [data, setData] = useState(initialState);
  // handle confirm on props with record component
  const onConfirmClick = () => {
    if (props.confirm) {
      const msg = "SearchMember";
      props.confirm(msg, data.member.value, data.membername.value);
    } else {
      props.confirm("");
    }
  };
  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (data.member.value === "") {
      data.member.isValid = false;
      isGood = false;
    }
    if (data.membername.value === "") {
      data.membername.isValid = false;
      isGood = false;
    }
    if (!isGood) {
      setData({
        ...data
      });
    }
    return isGood;
  };
  // handle onclick submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValidSearch()) {
      onConfirmClick();
    }
  };
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-md-12 col-12">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="form-group">
                  <label htmlFor="InputMember" className="col-form-label">
                    {" "}
                    วันที่เริ่มต้น
                  </label>
                  <input
                    style={{
                      backgroundColor: "#f2f4f6"
                    }}
                    className={classNames("form-control form-control", {
                      "form-control form-control is-invalid":
                        data.member.isValid === false
                    })}
                    placeholder="กรอก วันที่เริ่มต้น"
                    value={data.member.value}
                    name="member"
                    onChange={(e) =>
                      setData({ ...data, member: { value: e.target.value } })
                    }
                  />
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-group">
                  <label htmlFor="InputMemberName" className="col-form-label">
                    {" "}
                    วันที่สิ้นสุด
                  </label>
                  <input
                    style={{
                      backgroundColor: "#f2f4f6"
                    }}
                    className={classNames("form-control form-control", {
                      "form-control form-control is-invalid":
                        data.membername.isValid === false
                    })}
                    placeholder="กรอก วันที่สิ้นสุด"
                    value={data.membername.value}
                    name="membername"
                    onChange={(e) =>
                      setData({
                        ...data,
                        membername: { value: e.target.value }
                      })
                    }
                  />
                </div>
              </div>

              <div className="col-md-2 col-12">
                <div className="form-group">
                  <label
                    htmlFor="InputMember"
                    className="col-form-label"
                  ></label>

                  <button
                    style={{ marginTop: 15 }}
                    type="submit"
                    className="btn btn-default btn-block"
                  >
                    <i className="fa fa-search" /> ค้นหา
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
