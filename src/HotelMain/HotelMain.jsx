import React from 'react'

export default function HotelMain({hotel}) {
  return (
    <main>
      <div>
        <h1>{hotel.name}</h1>
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
