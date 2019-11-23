import React, {Component} from 'react';
import '../utils/icons.svg';
import './HotelSide.scss';
import {getHotelList} from '../utils/apiCalls';

class HotelSide extends Component {
  constructor() {
    super()
    this.state={
      hotelList: []
    }
  }

  componentDidMount() {
    this.setHotelList()
  }

  setHotelList = async () => {
    const hotels = await getHotelList()
    const uniqueHotels = this.filterHotels(hotels)
    const sorted = this.sortHotels(uniqueHotels)
    this.setState({hotelList: sorted})
  }

  filterHotels = (hotels) => {
    return hotels.list.reduce((acc, hotel) => {
      const boolean = acc.find(obj => obj.name === hotel.name)
      if(!boolean) acc.push(hotel)
      return acc
    }, [])
  }

  sortHotels = (hotels) => {
    console.log(hotels[0])
    return hotels.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

  render() {
    const {productImage} = this.props
    const hotelList = this.state.hotelList.map((hotel, key) => (
      <li key={key}>
        <p>{hotel.name}</p>
        <p>${hotel.price}</p>
      </li>
    ))
    return (
      <aside>
        <button>SEE ALL LAS VEGAS HOTELS</button>
        {
          productImage &&
          <img src={require('../utils' + productImage[0].href)} alt="Hotel"/>
        }
        <ul>{hotelList}</ul>
        
      </aside>
    )
  }
}

export default HotelSide;