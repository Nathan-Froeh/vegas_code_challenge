import React, { Component } from 'react';
import {HotelSide} from '../HotelSide/HotelSide';

export class Hotel extends Component {
  constructor() {
    super()
    this.state={
      view: 'description'
    }
  }
  render() {
    console.log(this.props.currentHotel)
    return (
      <div>
        <HotelSide/>
        <main>

        </main>
        
      </div>
    )
  }
}

export default Hotel
