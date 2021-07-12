import React from "react";
import moment from "moment";
import QRcode from "qrcode.react";
import "moment/locale/th";

import logo from "../../../../assets/logo/logo512.png";

export class LocationToPrint extends React.Component {
  constructor(props) {
    super(props);
  }

  // // // ปรับข้อมูล เมื่อ มีการ อัปเดต สโตส
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("5555");
  //   console.log(nextProps.record);
  //   // get date_seach
  //   var isData = [];

  //   if (nextProps.record !== this.state.records) {
  //     console.log("666");
  //     isData = nextProps.record;
  //     console.log(isData);
  //     this.setState({
  //       records: isData
  //     });
  //   }
  // }

  render() {
    return (
      <div className="p-5">
        <div
          className="row"
          type="flex"
          justify="space-between"
          className="py-2 text-muted"
        >
          <div>
            <middle>REH-{moment(new Date()).format("YYYYMMDD")}</middle>
          </div>
          <div className="text-right">
            <middle>วันที่ {moment(new Date()).format("ll")}</middle>
          </div>
        </div>

        <div
          className="py-2 text-muted"
          type="flex"
          justify="center"
          style={{ marginTop: "40px" }}
        >
          <div className="text-center">
            <img
              src={logo}
              alt="qrcode"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        <div
          className="py-2 text-muted"
          type="flex"
          justify="center"
          style={{ marginTop: "-10px" }}
        >
          <div className="text-center">
            <h2>โรงพยาบาลร้อยเอ็ด</h2>
          </div>
        </div>
        <div
          className="py-2 text-muted"
          type="flex"
          justify="center"
          style={{ marginTop: "-10px" }}
        >
          <div className="text-center">
            <h3>{this.props.record.scan_location}</h3>
          </div>
        </div>

        <div
          className="py-2 text-muted"
          type="flex"
          justify="center"
          style={{ marginTop: "-20px" }}
        >
          {/* style={{ marginTop: "50px" }} */}
          <div className="text-center">
            <QRcode
              id="myqr"
              value={`${JSON.stringify(this.props.record)}`}
              size={320}
              includeMargin={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
