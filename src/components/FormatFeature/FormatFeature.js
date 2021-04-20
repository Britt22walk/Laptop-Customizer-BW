import React, { Component } from "react";
import { USCurrencyFormat } from "../../App";
import "./FormatFeature.css";

class FormatFeature extends Component {
  render() {
    const { item, itemHash, feature, updateFeature, selected } = this.props;
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={JSON.stringify(feature)}
          checked={item.name === selected[feature].name}
          onChange={(e) => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FormatFeature;
