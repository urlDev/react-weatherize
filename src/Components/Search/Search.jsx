import React, { Component } from "react";
import { WeatherConsumer } from "../../Context";
import { Form, Button, FormControl } from "react-bootstrap";

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
              <Form inline className="mt-3" onSubmit={value.handleSubmit}>
                <FormControl
                  onChange={value.handleChange}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={value.location}
                  name="location"
                />
                <Button variant="outline-info" type="submit">
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
