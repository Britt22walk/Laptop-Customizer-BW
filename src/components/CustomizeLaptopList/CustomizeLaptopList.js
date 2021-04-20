import React, { Component } from "react";
import "./CustomizeLaptopList.css";
import AllOptions from "../AllOptions/AllOptions";

class CustomizeLaptopList extends Component {
  render() {
    const { selected, updateFeature, features } = this.props;
    const allFeatures = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <AllOptions
          feature={feature}
          featureHash={featureHash}
          selected={selected}
          updateFeature={updateFeature}
          features={features}
        />
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {allFeatures}
      </form>
    );
  }
}

export default CustomizeLaptopList;
