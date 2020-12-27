import React, { Component } from "react";
import axios from "axios";
import Card from "../card/card.index";
import Search from "../search/search.index";
import DetailCard from "../detailCard/detailCard.index";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataRecieved: false,
      countries: "",
      readMoreValue: "",
      isSearching: false,
      inputValue: "",
    };
  }

  getCountry = async () => {
    const response = await axios("https://restcountries.eu/rest/v2/all");
    response.status === 200 &&
      this.setState({ countries: response.data, isDataRecieved: true });
  };

  async componentDidMount() {
    this.getCountry();
  }

  handleButtonClick = (value) => {
    this.setState({ readMoreValue: value });
  };

  onClickClose = () => {
    this.setState({ readMoreValue: "" });
  };

  onInputChange = (e) => {
    this.setState(
      {
        inputValue: e.target.value,
      },
      () => {
        this.state.inputValue !== ""
          ? this.setState({ isSearching: true })
          : this.setState({ isSearching: false });
      }
    );
  };

  render() {
    const {
      countries,
      isDataRecieved,
      readMoreValue,
      isSearching,
    } = this.state;
    const searchResult =
      countries &&
      countries.filter((country) =>
        country.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
          ? country
          : null
      );

    return (
      <React.Fragment>
        {readMoreValue ? (
          <DetailCard
            country={countries}
            readMoreValue={readMoreValue}
            onClickClose={this.onClickClose}
          />
        ) : (
          <>
            <Search
              onInputChange={this.onInputChange}
              inputValue={this.state.inputValue}
            />
            {isSearching ? (
              <>
                <div className="cardsView">
                  {isDataRecieved &&
                    searchResult.map((item, index) => {
                      return (
                        <Card
                          flag={item.flag}
                          key={index}
                          countryName={item.name}
                          capital={item.capital}
                          handleButtonClick={this.handleButtonClick}
                        />
                      );
                    })}
                </div>
              </>
            ) : (
              <>
                <div className="cardsView">
                  {isDataRecieved &&
                    countries.map((item, index) => {
                      return (
                        <Card
                          flag={item.flag}
                          key={index}
                          countryName={item.name}
                          capital={item.capital}
                          handleButtonClick={this.handleButtonClick}
                        />
                      );
                    })}
                </div>
              </>
            )}
          </>
        )}
      </React.Fragment>
    );
  }
}
export default Countries;
