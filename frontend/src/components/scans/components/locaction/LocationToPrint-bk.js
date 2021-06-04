import React from "react";
import QRcode from "qrcode.react";

export class LocationToPrint extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="p-5">
          <div
            className="row"
            type="flex"
            justify="space-between"
            className="py-2 text-muted"
          >
            <div>
              <middle>REH-20210511</middle>
            </div>
            <div className="text-right">
              <middle>วันที่ 11/5/2564</middle>
            </div>
          </div>

          <div
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "40px" }}
          >
            <div className="text-center">
              {/* <Avatar
                src="/static/logo/logo512.png"
                style={{ width: "200px", height: "200px" }}
              /> */}
            </div>
          </div>
          <div
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "-10px" }}
          >
            <div className="text-center">
              <h2>โรงพยาบาลร้อยเอ็ด{JSON.stringify(this.props.record)}</h2>
            </div>
          </div>
          <div
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "-20px" }}
          >
            <div className="text-center">
              <h3>{this.props.record.location}</h3>
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
              {this.props.record ? (
                <QRcode
                  id="myqr"
                  value={`${JSON.stringify(this.props.record)}`}
                  size={320}
                  includeMargin={true}
                />
              ) : (
                <p>No QR code preview</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
