export const getHotelDetails = async () => {
  return await fetch('http://localhost:3001/api/hotels/venetian')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
}

export const getHotelList = async () => {
  return await fetch('http://localhost:8888/api/hotels/')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
}