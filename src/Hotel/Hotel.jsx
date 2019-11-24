import React from "react";
import HotelSide from "../HotelSide/HotelSide";
import HotelMain from "../HotelMain/HotelMain";
import "./Hotel.scss";

export default function Hotel({ currentHotel }) {
  return (
    <div className="Hotel">
      <HotelSide productImage={currentHotel.media} />
      <HotelMain hotel={currentHotel} />
    </div>
  );
}
