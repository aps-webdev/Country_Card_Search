import React, { Component } from "react";
import "./search.styles.scss";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
    };
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="input-wrapper">
        <input
          onChange={this.onInputChange}
          placeholder="Search Country"
          value={inputValue}
          spellCheck={false}
        />
        <span className="input-highlight">
          {inputValue.replace(/ /g, "\u00a0")}
        </span>
      </div>
    );
  }
}
