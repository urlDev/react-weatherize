import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import { WeatherConsumer } from "../../Context";

import "./Unsplash.scss";

class Unsplash extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <WeatherConsumer>
            {value => {
                return (
                    <div className="unsplash">
                        <Image  src={value.thumbnail} className="" rounded></Image>
                    </div>
                )
            }}
            </WeatherConsumer>
        );
    }
}

export default Unsplash;