import React, {Component} from 'react';
import '../utils/icons.svg';
import './HotelSide.scss';

class HotelSide extends Component {
  constructor() {
    super()
    this.state={
      hotelList: {}
    }
  }

  render() {
    const {productImage} = this.props
    return (
      <aside>
        <button>SEE ALL LAS VEGAS HOTELS</button>
        {
          productImage &&
          <img src={require('../utils' + productImage[0].href)} alt="Hotel"/>
        }
        
      </aside>
    )
  }
}

export default HotelSide;