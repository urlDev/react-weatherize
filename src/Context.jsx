import React, { Component } from "react";
import axios from "axios";
import {key} from "./apiKeys.js";

const WeatherContext = React.createContext();

const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class WeatherProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherName: "Rain",
      weatherImg: "",
      degree: 10,
      day: new Date().getDate(),
      month: months[d.getMonth()],
      location: "London"
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&APPID=${key}&units=metric`
      )
      .then(response => {
        const apiResponse = response.data;
        this.setState({
          weatherName: apiResponse.weather[0].main,
          weatherImg: apiResponse.weather[0].icon,
          degree: Math.floor(apiResponse.main.temp),
          location: apiResponse.name
        });
        console.log(apiResponse.weather[0].main);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // gets the value of inputs
  handleChange = e => {
    e.preventDefault();

    const { value, name } = e.target;

    this.setState({
      [name]: value
    });

    console.log(this.state.location);
  };

  keyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.getWeather();
    }
  }

  handleClick = e => {
    this.getWeather();
  };

  render() {
    return (
      <WeatherContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getWeather: this.getWeather,
          handleClick: this.handleClick,
          handleChange: this.handleChange,
          keyPress: this.keyPress
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

//Variable for state consumers
const WeatherConsumer = WeatherContext.Consumer;

export { WeatherProvider, WeatherConsumer };

// fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//                 .then(result => {
//                     // console.log(result);
//                     return result.json();
//                 })
//                 .then(data => {
//                     // console.log(data)
//                     const today = data.consolidated_weather[1];
//                     console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`)
//                 })
//                 .catch(error => console.log(error));
// weatherName: apiResponse.list.weather.main,
//           degree: apiResponse.list.main.temp,
//           location: apiResponse.city.name,
//           weatherImg: apiResponse.list.weather.icon
