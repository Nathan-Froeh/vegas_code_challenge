import React, {Component} from 'react'

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
      <main>
        <div>
          <h1>{name}</h1>
          <p>{starRating}</p>
          <div>
            <p>{location.areaName}</p>
            <p>{phoneNumber}</p>
            <p>Best Price Guarantee</p>
          </div>
          <p>
            <strong>{price}</strong>
            HOTEL ROOMS FROM
          </p>
        </div>
      </main>
    )
  }
}

export default HotelMain;