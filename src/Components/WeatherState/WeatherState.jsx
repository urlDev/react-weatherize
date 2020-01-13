import React, { Component } from "react";
import { WeatherConsumer } from "../../Context";
import "./WeatherState.scss";

class WeatherState extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <WeatherConsumer>
        {value => {
          return (
            <div className="weatherState">
              <div className="weatherName" onClick={ () => {value.handleChange()}}>
                <h1>{value.weatherName}</h1>
              </div>
              <div className="weatherImg">
                <i className="fas fa-cloud-showers-heavy fa-4x   "></i>
              </div>
            </div>
          );
        }}
      </WeatherConsumer>
    );
  }
}

export default WeatherState;
