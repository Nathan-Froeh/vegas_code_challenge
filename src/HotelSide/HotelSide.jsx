import React from 'react';
import '../utils/icons.svg';
import './HotelSide.scss';

export default function HotelSide({productImage}) {

  return (
    <aside>
      <button>SEE ALL LAS VEGAS HOTELS</button>
      {
        productImage &&
        <img src={productImage[0]} alt="Hotel"/>
      }
      
    </aside>
  )
}
