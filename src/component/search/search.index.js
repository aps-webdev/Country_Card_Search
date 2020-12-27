import React, { Component } from "react";
import "./search.styles.scss";

export default class Search extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <input
          onChange={this.props.onInputChange}
          placeholder="Search Country"
          value={this.props.inputValue}
          spellCheck={false}
        />
        <span className="input-highlight">
          {this.props.inputValue.replace(/ /g, "\u00a0")}
        </span>
      </div>
    );
  }
}
