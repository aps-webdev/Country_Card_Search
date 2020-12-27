import React from "react";
import "./card.styles.scss";

export default function Card(props) {
  const showDetails = (e) => {
    props.handleButtonClick(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="cardWrap">
        <div className="cardLeft">
          <img src={props.flag} alt="country_flag" className="flagImg" />
        </div>
        <div className="cardRight">
          <div className="countryInfo">
            <div className="countryName">{props.countryName}</div>
            {props.capital === "" ? null : (
              <div className="capitalBadge">{props.capital}</div>
            )}
          </div>
          <div>
            <button
              className="btn"
              value={props.countryName}
              onClick={showDetails}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
