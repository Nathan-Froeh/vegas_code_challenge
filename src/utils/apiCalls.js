export const getHotelDetails = async () => {
  const response = await fetch('http://localhost:8888/api/hotels/venetian')
  const result = response.json()
  console.log(result)
}