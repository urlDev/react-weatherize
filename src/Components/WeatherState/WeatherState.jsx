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
              <div className="weatherName">
                <h1>{value.weatherName}</h1>
              </div>
              <div className="weatherImg">
                <img src={`https://openweathermap.org/img/wn/${value.weatherImg}@2x.png`} alt={value.weatherName}></img>
                {/* <i className="fas fa-cloud-sun fa-4x"></i> */}
              </div>
            </div>
          );
        }}
      </WeatherConsumer>
    );
  }
}

export default WeatherState;
