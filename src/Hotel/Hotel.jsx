import React, { Component } from 'react';
import {HotelSide} from '../HotelSide/HotelSide';
import {HotelMain} from '../HotelMain/HotelMain';

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
        <HotelMain/>
        
      </div>
    )
  }
}

export default Hotel
