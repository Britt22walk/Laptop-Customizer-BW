import React, { Component } from "react";
import DisplaySelectedFeatures from "../DisplaySelectedFeatures/DisplaySelectedFeatures";
import Total from "../Total/Total";

class DisplayCart extends Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <DisplaySelectedFeatures
          featureHash={featureHash}
          feature={feature}
          name={selectedOption.name}
          cost={selectedOption.cost}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selected={selected} />
      </section>
    );
  }
}

export default DisplayCart;
