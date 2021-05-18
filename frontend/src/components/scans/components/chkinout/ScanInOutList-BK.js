import React from "react";
import arePoints from "./arePoints";
import QrReader from "react-qr-reader";
import { Redirect } from "react-router";
import { geolocated } from "react-geolocated";

import { toast } from "react-toastify";

import ScanInOutMessage from "./ScanInOutMessage";

import "react-toastify/dist/ReactToastify.css";
class ScanInOutList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qrscan: [], showScan: true };
  }

  handleScan = (data) => {
    console.log(data);
    if (data !== null && data !== undefined) {
      console.log(data[0]["latitude"]);
      var obj = JSON.parse(data);
      this.setState({
        qrscan: obj
      });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  handleStatus = (status) => {
    if (status === true) {
      // toast.success("🦄 Wow so easy!", {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined
      // });
      this.setState({
        showScan: false
      });
    }

    // setTimeout(() => {
    //   return <Redirect to="/scan/member-list" />;
    // }, 3000);
    // let Alert = new Promise(function (resolve, reject) {
    //   // save health
    //   async function createHealth() {
    //     if (status === true) {
    //       return await toast
    //         .success("🦄 Wow so easy!", {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined
    //         })
    //         .then(() => {
    //           return true;
    //         });
    //     } else {
    //       return await false;
    //     }
    //   }
    //   // get result by function
    //   (async function () {
    //     let resultHealth = await createHealth();

    //     if (resultHealth === true) {
    //       console.log("Ture");
    //       resolve(true);
    //     } else {
    //       console.log("False");
    //       reject(false);
    //     }
    //   })();
    // });

    // Alert.then((status) => {
    //   // status ? <Redirect to="/scan/member-list" /> : "";
    //   if (status === true) {
    //     return <Redirect to="/scan/member-list" />;
    //   }
    // }).catch((e) => {
    //   console.log("False");
    // });
  };

  // _commitAutoSave = () => {
  //   this.setState({
  //     showScan: false
  //   });
  // };

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log("Component will be updated soon");
  //   console.log(this.state.showScan);
  //   console.log(nextState.showScan);
  //   if (nextState.showScan === false) {
  //     //this.fetchData(this.props.userName);
  //     this.setState({ showScan: true });
  //   }
  // }

  // todo
  componentDidUpdate(prevProps, prevState) {
    console.log("Component will be updated soon");
    console.log(prevState.showScan);
    console.log(this.state.showScan);
    if (prevState.showScan !== this.state.showScan) {
      this.setState({
        showScan: true
      });
    }
  }

  // componentDidUpdate(nextState) {
  //   //Typical usage, don't forget to compare the props
  //   if (this.state.showScan !== nextState.showScan) {
  //     //this.fetchData(this.props.userName);
  //     console.log(nextState.showScan);
  //   }
  // }

  CheckLocation = (checkPoint, centerPoint, km) => {
    console.log(checkPoint);
    // let chk = arePoints(
    //   {
    //     lat: checkPoint.lat.toFixed(4),
    //     lng: checkPoint.lng.toFixed(4)
    //   },
    //   {
    //     lat: centerPoint.lat,
    //     // this.state.qrscan !== undefined
    //     //   // ? this.state.qrscan.latitude
    //     //   ? this.state.qrscan.latitude
    //     //   : 0,
    //     lng: centerPoint.lng
    //     // this.state.qrscan !== undefined
    //     //   ? this.state.qrscan.longitude
    //     //   : 0
    //   },
    //   km
    // );

    // if (chk === true) {
    //   return (
    //     <div className="col-12">
    //       <ScanInOutMessage
    //         msg="บันทึกข้อมูลลงเวลาเรียบร้อย"
    //         alert="alert alert-success"
    //       />
    //       {this.handleStatus(true)}
    //       {/* {this._commitAutoSave()} */}
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="col-12" style={{ textAlign: "center" }}>
    //       <ScanInOutMessage
    //         msg="--- กรุณาตรวจสอบจุดสแกน ---"
    //         alert="alert alert-warning"
    //       />

    //       <table>
    //         <tbody>
    //           <tr>
    //             <td>latitude</td>
    //             <td>{this.props.coords.latitude}</td>
    //           </tr>
    //           <tr>
    //             <td>longitude</td>
    //             <td>{this.props.coords.longitude}</td>
    //           </tr>
    //           <tr>
    //             <td>altitude</td>
    //             <td>{this.props.coords.altitude}</td>
    //           </tr>
    //           <tr>
    //             <td>heading</td>
    //             <td>{this.props.coords.heading}</td>
    //           </tr>
    //           <tr>
    //             <td>speed</td>
    //             <td>{this.props.coords.speed}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   );
    // }
  };

  render() {
    return this.props.msg === "chkin" || this.props.msg === "chkout" ? (
      !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
      ) : this.props.coords ? (
        <>
          <div className="row">
            <div className="col-12">
              {this.state.showScan ? (
                <QrReader
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: "100%" }}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row" style={{ marginTop: 10 }}>
            {this.CheckLocation(
              {
                lat: this.props.coords.latitude.toFixed(4),
                lng: this.props.coords.longitude.toFixed(4)
              },
              {
                lat: 16.433152,
                // this.state.qrscan !== undefined
                //   // ? this.state.qrscan.latitude
                //   ? this.state.qrscan.latitude
                //   : 0,
                lng: 102.8292608
                // this.state.qrscan !== undefined
                //   ? this.state.qrscan.longitude
                //   : 0
              },
              0.5
            )}
          </div>
        </>
      ) : (
        <div>กำลังค้นหาตำแหน่ง &hellip; </div>
      )
    ) : (
      <div className="col-12" style={{ textAlign: "center" }}>
        <ScanInOutMessage
          msg="--- กด สแกนเข้า - ออก เพื่อทำการสแกน ---"
          alert="alert alert-info"
        />
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(ScanInOutList);
