import React, { Component } from "react";
import { WeatherConsumer } from "../../Context";

import "./Location.scss";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <WeatherConsumer>
        {value => {
          return (
            <div className="location" >
              <h1>{value.location}</h1>
            </div>
          );
        }}
      </WeatherConsumer>
    );
  }
}

export default Location;
