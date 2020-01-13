import React, { Component } from "react";
import { WeatherConsumer } from "../../Context";
import "./Date.scss";

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <WeatherConsumer>
        {value => {
          return (
            <div className="date">
              <h1>
                {value.day} <span>{value.month}</span>
              </h1>
              <hr />
            </div>
          );
        }}
      </WeatherConsumer>
    );
  }
}

export default Date;
