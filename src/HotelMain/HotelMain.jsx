import React, {Component} from 'react';
import './HotelMain.scss';

class HotelMain extends Component {
  constructor() {
    super()
    this.state={
      view: 'description'
    }
  }

  render() {
    const {name, starRating, price, phoneNumber, location, description, details} = this.props.hotel;
    return (
      <main className='hotel-main'>
        <section className='header'>

          <section className='sub-head'>
            <div className='name'>
              <h1>{name}</h1>
              <span>{starRating}</span>
            </div>  
            <div className='area'>
              <p>{location.areaName}</p>
              <p>{phoneNumber}</p>
              <p>Best Price Guarantee</p>
            </div>
          </section>

          <div className='price'>
            <strong>{`$${price}`}</strong>
            <p>HOTEL ROOMS FROM</p>
          </div>
        </section>
      </main>
    )
  }
}

export default HotelMain;