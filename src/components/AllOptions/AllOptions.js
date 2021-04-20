import React, { Component } from "react";
import FormatFeature from "../FormatFeature/FormatFeature";
import "./AllOptions.css";

class AllOptions extends Component {
  render() {
    const {
      features,
      feature,
      selected,
      updateFeature,
      featureHash,
    } = this.props;
    const options = features[feature].map((item) => {
      const itemHash = JSON.stringify(item);
      return (
        <FormatFeature
          key={itemHash}
          id={itemHash}
          item={item}
          feature={feature}
          selected={selected}
          updateFeature={updateFeature}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default AllOptions;
