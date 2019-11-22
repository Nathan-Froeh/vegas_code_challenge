import React, { Component } from 'react';
import HotelSide from '../HotelSide/HotelSide';
import HotelMain from '../HotelMain/HotelMain';
import './Hotel.scss';

export class Hotel extends Component {
  constructor() {
    super()
    this.state={
      view: 'description'
    }
  }
  render() {
    console.log(this.props.currentHotel)
    const {media} = this.props.currentHotel;
    return (
      <div className='Hotel'>
        <HotelSide productImage={media}/>
        <HotelMain hotel={this.props.currentHotel}/>
      </div>
    )
  }
}

export default Hotel
