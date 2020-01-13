import React, { Component } from "react";

const WeatherContext = React.createContext();

class WeatherProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherName: "Rain",
      weatherImg: "",
      degree: 10,
      day: "10",
      month: "Jul",
      location: "London"
    };
  }

  handleChange = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/`
    )
      .then(result => {
        // console.log(result);
        return result.json();
      })
      .then(data => {
        // console.log(data)
        const today = data.consolidated_weather[0];
        this.setState({
          weatherName: today.weather_state_name,
          degree: today.the_temp,
          location: data.title
        })
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <WeatherContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          handleChange: this.handleChange
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
