import React, { Component } from "react";
import WeatherState from "./Components/WeatherState/WeatherState.jsx";
import Degree from "./Components/Degree/Degree.jsx";
import Date from "./Components/Date/Date.jsx";
import Location from "./Components/Location/Location.jsx";
import Search from "./Components/Search/Search.jsx";
import Unsplash from "./Components/Unsplash/Unsplash.jsx";

import { Container, Row, Col } from "react-bootstrap";
// import {
//   imgTopLeft,
//   imgTopRight,
//   imgBottomLeft,
//   imgBottomRight
// } from "./Images.jsx";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <img
          src={require("./greenLeaf.png")}
          alt="green leaf"
          className="leaf leaf-top-Left"
        />
        <img
          src={require("./purpleLeaf.png")}
          alt="green leaf"
          className="leaf leaf-top-right"
        />
        <img
          src={require("./purpleLeaf.png")}
          alt="green leaf"
          className="leaf leaf-bottom-left"
        />
        <img
          src={require("./greenLeaf.png")}
          alt="green leaf"
          className="leaf leaf-bottom-right"
        />
        <Container className="App">
          <WeatherState />
          <Degree />
          <Row>
            <Col className="bottom">
              <Date />
              <Location />
            </Col>
            <Col>
              <Unsplash/>
            </Col>
          </Row>
        </Container>
        <Search />
      </React.Fragment>
    );
  }
}

export default App;

/* <img src={require("./topRight.png")} alt="" className="topRight"/>
   <img src={require("./bottomBorder.png")} alt="" className="bottomBorder"/> */
