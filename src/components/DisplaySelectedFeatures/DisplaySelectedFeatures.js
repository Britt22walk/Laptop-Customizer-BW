import React, { Component } from "react";

import "./DisplaySelectedFeatures.css";

class DisplaySelectedFeatures extends Component {
  render() {
    const { feature, name, cost, featureHash } = this.props;
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{name}</div>
        <div className="summary__option__cost">{cost}</div>
      </div>
    );
  }
}
export default DisplaySelectedFeatures;
