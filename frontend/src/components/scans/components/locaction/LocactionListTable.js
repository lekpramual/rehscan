import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { LocationToPrint } from "./LocationToPrint";

export class LocactionListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record: []
    };
  }
  render() {
    const showModal = (rs) => {
      console.log(rs);
      this.setState({
        record: rs
      });
    };
    return (
      <>
        <div className="row">
          <div className="col-12 table table-responsive ">
            <table className="table table-bordered table-hover text-nowrap">
              <thead>
                <tr>
                  <td>ลำดับ</td>
                  <td>ละติจูด</td>
                  <td>ลองติจูด</td>
                  <td>สถานที่</td>
                  <td>สถานะ</td>
                  <td>คำสั่ง</td>
                </tr>
              </thead>
              <tbody>
                {this.props.iscount ? (
                  this.props.isdata.map((rs, index) => {
                    return (
                      <tr key={rs.scan_id}>
                        <td>{index + 1}</td>
                        <td>{rs.latitude}</td>
                        <td>{rs.longitude}</td>
                        <td>{rs.scan_location}</td>
                        <td>
                          {rs.status_id === 1 ? (
                            <span className="badge bg-success">เปิดใช้งาน</span>
                          ) : (
                            <span className="badge bg-danger">ปิดใช้งาน</span>
                          )}
                        </td>
                        <td>
                          <span>
                            {/* <ReactToPrint
                        trigger={() => (
                          <a href="javascript:;">
                            <i
                              className="fas fa-print"
                              onClick={() => setRecord(record)}
                            />
                          </a>
                        )}
                        content={() => this.componentRef}
                        pageStyle="@page { size: 11.694in 8.264in landscape} "
                      /> */}
                            <ReactToPrint
                              trigger={() => (
                                <button onClick={() => showModal(rs)}>
                                  Print this out 123!
                                </button>
                              )}
                              content={() => this.componentRef}
                              pageStyle="@page { size: 11.694in 8.264in landscape} "
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr key="emtpydata">
                    <td
                      style={{ verticalAlign: "middle" }}
                      colSpan="7"
                      className="text-center"
                    >
                      {/* {(page - 1) * 20 + index + 1} */}
                      --- ไม่มีข้อมูล ---
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          {JSON.stringify(this.state.record)}
          <div style={{ display: "none" }}>
            <LocationToPrint
              ref={(el) => (this.componentRef = el)}
              record={this.state.record}
            />
          </div>
        </div>
      </>
    );
  }
}

export default LocactionListTable;
