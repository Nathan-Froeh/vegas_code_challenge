import React, { Component } from "react";
import "./App.scss";
import { getHotelDetails } from "./utils/apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentHotel: {}
    };
  }

  componentDidMount() {
    this.setCurrentHotel();
  }

  setCurrentHotel = async () => {
    const hotel = await getHotelDetails();
    this.setState({ currentHotel: hotel });
  };

  render() {
    return <div className="App"></div>;
  }
}

export default App;
