import React, { Component } from 'react';
import { Row } from "react-bootstrap";
import { WeatherConsumer } from "../../Context";
import "./Degree.scss";

class Degree extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <WeatherConsumer>
        {value => {
            return (
                <Row className="degree">
                <h1>{value.degree}°C</h1>
            </Row>
            )
        }}
        </WeatherConsumer>
            
        );
    }
}

export default Degree;