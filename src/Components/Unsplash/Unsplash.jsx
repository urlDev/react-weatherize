import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import { WeatherConsumer } from "../../Context";

import "./Unsplash.scss";

class Unsplash extends Component {
    render() {
        return (
            <WeatherConsumer>
            {value => {
                return (
                    <div className="unsplash">
                        <Image  src={value.thumbnail} ></Image>
                    </div>
                )
            }}
            </WeatherConsumer>
        );
    }
}

export default Unsplash;