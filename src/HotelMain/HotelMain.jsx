import React, {Component} from 'react'

class HotelMain extends Component {
  constructor() {
    super()
    this.state={
      view: 'description'
    }
  }

  render() {
    const {name} = this.props.hotel;
    return (
      <main>
        <div>
          <h1>{name}</h1>
          <p>stars</p>
          <div>
            <p>location</p>
            <p>phone</p>
            <p>message</p>
          </div>
          <p>
            <strong>price</strong>
            HOTEL ROOMS FROM
          </p>
        </div>
      </main>
    )
  }
}
