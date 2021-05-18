import React, { useState } from "react";
import classNames from "classnames";

function SearchMember(props) {
  const initialState = {
    member: { value: "", isValid: true },
  };
  // set state with formdefaults
  const [data, setData] = useState(initialState);
  // handle confirm on props with record component
  const onConfirmClick = () => {
    if (props.confirm) {
      const msg = "SearchMember";
      props.confirm(msg, data.member.value);
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

    if (!isGood) {
      setData({
        ...data,
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
              <div className="col-md-8 col-12">
                <div className="form-group">
                  <label htmlFor="InputMember" className="col-form-label">
                    {" "}
                    เลขสมาชิก (ตัวอย่าง : 99)
                  </label>
                  <input
                    style={{
                      backgroundColor: "#f2f4f6",
                    }}
                    className={classNames("form-control form-control-lg", {
                      "form-control form-control-lg is-invalid":
                        data.member.isValid === false,
                    })}
                    placeholder="กรอก เลขสมาชิก"
                    value={data.member.value}
                    name="member"
                    onChange={(e) =>
                      setData({ ...data, member: { value: e.target.value } })
                    }
                  />
                </div>
              </div>

              <div className="col-md-4 col-12">
                <div className="form-group">
                  <label
                    htmlFor="InputMember"
                    className="col-form-label"
                  ></label>

                  <button
                    style={{ marginTop: 38 }}
                    type="submit"
                    className="btn btn-lg btn-default"
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

export default SearchMember;
