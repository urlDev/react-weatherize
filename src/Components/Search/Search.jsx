import React, { Component } from "react";
import { WeatherConsumer } from "../../Context";
import { Form, Button, FormControl, Container, Row } from "react-bootstrap";

import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <WeatherConsumer>
        {value => {
          return (
            <div className="search">
              <Form inline className="mt-3">
                <FormControl
                  onChange={value.handleChange}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={value.location}
                  name="location"
                />
                <Button variant="outline-info" onClick={value.handleClick}  onKeyDown={value.keyPress}>
                  Search
                </Button>
              </Form>
            </div>
          );
        }}
      </WeatherConsumer>
    );
  }
}

export default Search;
