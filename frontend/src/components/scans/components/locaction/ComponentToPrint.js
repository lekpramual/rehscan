import React from "react";
export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.record}</h1>;
  }
}
