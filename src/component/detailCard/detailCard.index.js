import React from "react";
import "./detailCard.styles.scss";

function DetailCard(props) {
  const handleClose = () => {
    props.onClickClose();
  };
  const result =
    props.country &&
    props.country.filter(function (country) {
      return country.name === props.readMoreValue;
    });
  return (
    <div className="container">
      {result &&
        result.map((item, index) => {
          return (
            <div key={index} className="mainWrap">
              <div>
                <div className="topAlign">
                  <div className="infoColor">{item.name}</div>
                  <button className="closeButton" onClick={handleClose}>
                    X
                  </button>
                </div>
                <div>
                  Country Code -{" "}
                  <span className="infoColor">{item.alpha2Code}</span>
                </div>
                <div>
                  Region - <span className="infoColor">{item.region}</span>
                </div>
                <div>
                  Capital - <span className="infoColor">{item.capital}</span>
                </div>
                <div>
                  Currency -{" "}
                  {item.currencies.map((currency) => (
                    <span className="infoColor">{currency.name}</span>
                  ))}
                </div>
                <div>
                  Currency Code -{" "}
                  {item.currencies.map((currency) => (
                    <span className="infoColor">{currency.code}</span>
                  ))}
                </div>
                <div>
                  Currency Symbol -{" "}
                  {item.currencies.map((currency) => (
                    <span className="infoColor">{currency.symbol}</span>
                  ))}
                </div>
                <div>
                  Area - <span className="infoColor">{item.area}</span>
                </div>
                <div>
                  callingCodes -{" "}
                  {item.callingCodes.map((code) => (
                    <span className="infoColor">+{code}</span>
                  ))}
                </div>
                <div>
                  Population -{" "}
                  <span className="infoColor">{item.population}</span>
                </div>
                <div>
                  Time Zone -{" "}
                  {item.timezones.map((timeZone) => (
                    <span className="infoColor">{timeZone}, </span>
                  ))}
                </div>
              </div>
              <hr className="horizontalLine" />
              <div className="flagContainer">
                <img src={item.flag} alt="country-flag" className="flgImg" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default DetailCard;
