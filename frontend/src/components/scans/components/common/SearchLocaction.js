import React, { useState } from "react";
// import classNames from "classnames";
import Select from "react-select";

function SearchLocaction(props) {
  const [service, setService] = useState("");

  // handle confirm on props with record component
  const onConfirmClick = () => {
    if (props.confirm) {
      const msg = "SearchLocation";
      props.confirm(msg, service);
    } else {
      props.confirm("");
    }
  };
  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (service === "" || service === null) {
      isGood = false;
    }

    if (!isGood) {
      // setData({
      //   ...data
      // });
    }
    return isGood;
  };
  // handle onclick submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValidSearch()) {
      console.log(service);
      onConfirmClick();
    }
  };

  const options = [
    { value: "100", label: "ศูนย์คอมพิวเตอร์" },
    { value: "101", label: "ตึกจุฬาภรณ์" },
    { value: "102", label: "อาคารเภสัช" }
  ];
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-md-12 col-12">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-md-10 col-12">
                <div className="form-group">
                  <label htmlFor="InputMember" className="col-form-label">
                    {" "}
                    จุดสแกน
                  </label>
                  <Select
                    // value={data.service}
                    select={service}
                    options={options}
                    placeholder="เลือก จุดสแกน..."
                    // onChange={(val) => {
                    //   setData({
                    //     ...data,
                    //     service: val
                    //   });
                    // }}
                    onChange={(val) => setService(val)}
                    isClearable={true}
                  />
                </div>
              </div>

              <div className="col-md-2 col-12">
                <div className="form-group">
                  <label htmlFor="InputMember" className="col-form-label">
                    {" "}
                    &nbsp;
                  </label>
                  <button type="submit" className="btn btn-default btn-block">
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

export default SearchLocaction;
