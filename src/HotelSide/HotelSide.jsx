import React from 'react';
import '../utils/icons.svg';
import './HotelSide.scss';

export default function HotelSide({productImage}) {
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
