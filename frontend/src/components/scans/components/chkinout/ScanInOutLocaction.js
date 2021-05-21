import React, { useEffect } from "react";
import { geolocated } from "react-geolocated";

const ScanInOutLocaction = (props) => {
  useEffect(() => {
    console.log("Reload Locaction...",props.isGeolocationEnabled);
  }, [props.isGeolocationEnabled]);

  return !props.isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !props.isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : props.coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{props.coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{props.coords.longitude}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(ScanInOutLocaction);
