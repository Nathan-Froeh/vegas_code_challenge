import React, { Component } from "react";
import "./App.scss";
import { getHotelDetails } from "./utils/apiCalls";
import Hotel from './Hotel/Hotel';

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
    return (
    <div className="App">
      {
        this.state.currentHotel.name !== undefined &&
        <Hotel currentHotel={this.state.currentHotel}/>
      }
    </div>
    );
  }
}

export default App;
