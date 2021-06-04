import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { LocationToPrint } from "./LocationToPrint";

export default class LocationBtnLocation extends Component {
  render() {
    return (
      <span>
        <ReactToPrint
          trigger={() => (
            <a href="javascript:;">
              <i className="fas fa-print" onClick={() => setRecord(record)} />
            </a>
          )}
          content={() => this.componentRef}
          pageStyle="@page { size: 11.694in 8.264in landscape} "
        />
        <div style={{ display: "none" }}>
          <LocationToPrint
            ref={(el) => (this.componentRef = el)}
            record={this.props.record}
          />
        </div>
      </span>
    );
  }
}
