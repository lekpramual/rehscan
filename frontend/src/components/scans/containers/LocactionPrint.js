import React from "react";
import ReactToPrint from "react-to-print";

import { ComponentToPrint } from "../components/locaction/ComponentToPrint";

class LocactionPrint extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
          pageStyle="@page { size: 11.694in 8.264in landscape} "
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default LocactionPrint;
