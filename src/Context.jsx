import React, { Component } from "react";
import axios from "axios";
import Unsplash, { toJson } from "unsplash-js";
import { key, unsplashKey } from "./apiKeys.js";

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

//unsplash api
const unsplash = new Unsplash({
  accessKey: unsplashKey
});

class WeatherProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherName: "Rain",
      weatherImg: "",
      degree: 10,
      day: new Date().getDate(),
      month: months[d.getMonth()],
      location: "London",
      classNames: "",
      thumbnail: ""
    };
  }

  componentDidMount() {
    this.getWeather();
    this.getPicture();
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
      })
      .catch(error => {
        console.log(error);
      });
  };

  getPicture = () => {
    unsplash.search
      .photos(this.state.location, 1)
      .then(toJson)
      .then(json => {
        //get an element from results array randomly
        let result = json.results[Math.floor(Math.random()*json.results.length)];
        this.setState({
          thumbnail: result.urls.small
        })
      });

  };

  // gets the value of inputs
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });

    console.log(this.state.location);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getWeather();
    this.getPicture();
  };

  // with onclick of button, checks if states are empty, if they are empty then adds the classname of shake(which ive put in css)
  handleClick = () => {
    const { classNames, firstName, email, message } = this.state;

    if (firstName === "" && email === "" && message === "") {
      this.setState({ classNames: classNames ? "" : "visible" });
    }
  };

  render() {
    return (
      <WeatherContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getWeather: this.getWeather,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          getPicture: this.getPicture
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
