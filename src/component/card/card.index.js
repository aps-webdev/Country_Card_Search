import React from "react";
import "./card.styles.scss";

export default function Card() {
  return (
    <React.Fragment>
      <div class="cardWrap">
        <div class="cardLeft">FLAG</div>
        <div class="cardRight">
          <div class="countryInfo">INDIA</div>
          <button class="btn">Read More</button>
        </div>
      </div>
    </React.Fragment>
  );
}
