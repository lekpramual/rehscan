import React from "react";

const ScanInOutMessage = (props) => {
  return (
    <div className="row" style={{ marginBottom: 10 }}>
      <div className="col-12">
        <div className={`${props.alert} alert-dismissible`}>
          <h5>แจ้งเตือน !</h5>
          {props.msg}
        </div>
      </div>
    </div>
  );
};

export default ScanInOutMessage;
