import React, { Component } from "react";
import axios from "axios";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataRecieved: false,
      countries: "",
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

  render() {
    console.log(this.state);
    const { countries, isDataRecieved } = this.state;
    return (
      <React.Fragment>
        <div>Welcome to studiousTribe</div>
        {isDataRecieved &&
          countries.forEach((item, index) => {
            console.log(item);
          })}
      </React.Fragment>
    );
  }
}
export default Countries;
