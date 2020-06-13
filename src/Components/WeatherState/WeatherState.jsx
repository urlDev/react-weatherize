import React, { Component } from 'react';
import { WeatherConsumer } from '../../Context';
import './WeatherState.scss';

class WeatherState extends Component {
  render() {
    return (
      <WeatherConsumer>
        {(value) => {
          return (
            <div className="weatherState">
              <div
                className={
                  value.weatherName.length > 10
                    ? 'weatherNameLong'
                    : 'weatherName'
                }
              >
                <h1>{value.weatherName}</h1>
              </div>
              <div
                className="weatherImg"
                style={
                  value.weatherName.length > 10 ? { marginTop: '15px' } : null
                }
              >
                <img
                  src={
                    value.weatherImg &&
                    `https://openweathermap.org/img/wn/${value.weatherImg}@2x.png`
                  }
                  alt={value.weatherName}
                ></img>
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
