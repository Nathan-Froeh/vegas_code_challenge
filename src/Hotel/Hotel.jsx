import React, { Component } from 'react';

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
        
      </div>
    )
  }
}

export default Hotel
