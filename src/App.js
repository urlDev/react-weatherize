import React, { Component } from "react";
import WeatherState from "./Components/WeatherState/WeatherState.jsx";
import Degree from "./Components/Degree/Degree.jsx";
import Date from "./Components/Date/Date.jsx";
import Location from "./Components/Location/Location.jsx";
import { Container } from "react-bootstrap";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="App">
        <WeatherState />
        <Degree />
        <div className="bottom">
          <Date />
          <Location />
        </div>
      </Container>
    );
  }
}

export default App;
