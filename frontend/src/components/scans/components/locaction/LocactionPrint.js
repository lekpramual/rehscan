import React, { Component } from "react";

import { LocationToPrint } from "./LocationToPrint";

export class LocactionPrint extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    console.log("Loading ...");
  }

  componentWillUpdate(nextProps) {
    console.log("Set State...");
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.record !== this.state.records) {
      console.log("Set State 2...");
      console.log(nextProps.record);
      console.log(this.state.records);
      this.setState({ records: nextProps.record });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("Set State...");
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.record !== this.state.records) {
      console.log("Set State 2...");
      console.log(nextProps.record);
      console.log(this.state.records);
      this.setState({ records: nextProps.record });
    }
  }

  render() {
    const List = () => {
      return <h1>{JSON.stringify(this.state.records)}</h1>;
    };
    return <LocationToPrint ref={componentRef} record={record} />;
  }
}
