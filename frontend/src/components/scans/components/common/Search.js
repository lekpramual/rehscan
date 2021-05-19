import React, { useState } from "react";
// import classNames from "classnames";

import moment from "moment";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";

/**
 * Style
 */
import "react-datepicker/dist/react-datepicker.css";
//import moment from "moment";
import th from "date-fns/locale/th";
import "moment/locale/th.js";
moment.locale("th");
registerLocale("th", th);

function Search(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // handle confirm on props with record component
  const onConfirmClick = () => {
    if (props.confirm) {
      const msg = "SearchList";
      props.confirm(
        msg,
        moment(startDate).format("YYYY-MM-DD"),
        moment(endDate).format("YYYY-MM-DD")
      );
    } else {
      props.confirm("");
    }
  };
  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (startDate === "" || startDate === null) {
      isGood = false;
    }
    if (endDate === "" || endDate === null) {
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
      console.log(startDate, endDate);
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
                  {/* <DatePicker
                    locale="th"
                    className="form-control"
                    selected={data.start.value}
                    onChange={(e) =>
                      setData({
                        ...data,
                        start: {
                          value: moment(e).toDate(),
                          isValid: true
                        }
                      })
                    } // เฉพาะเมื่อค่ามีการเปลี่ยนแปลง
                    dateFormat="dd LLLL yyyy"
                    placeholderText="กรุณาเลือกวันที่"
                    //isClearable
                    isClearable={data.start.value !== "" ? true : false}
                  /> */}

                  <DatePicker
                    locale="th"
                    className="form-control"
                    isClearable={startDate !== "" ? true : false}
                    dateFormat="dd LLLL yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="กรุณาเลือกวันที่เริ่มต้น"
                  />
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-group">
                  <label htmlFor="InputMemberName" className="col-form-label">
                    {" "}
                    วันที่สิ้นสุด
                  </label>
                  <DatePicker
                    locale="th"
                    className="form-control"
                    isClearable={endDate !== "" ? true : false}
                    dateFormat="dd LLLL yyyy"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="กรุณาเลือกวันที่สิ้นสุด"
                  />
                </div>
              </div>

              <div className="col-md-2 col-12">
                <div className="form-group">
                  <label htmlFor="InputMember" className="col-form-label">
                    &nbsp;
                  </label>

                  <button
                    // style={{ marginTop: 15 }}
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
