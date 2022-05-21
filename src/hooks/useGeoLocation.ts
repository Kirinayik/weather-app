import { useState } from 'react'

export const useGeoLocation = () => {
  const [isAccepted, setIsAccepted] = useState(false)

  const findGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        if (!localStorage.getItem('geolocation')) {
          localStorage.setItem(
            'coordinates',
            JSON.stringify({
              lat: latitude,
              lon: longitude,
            })
          )
        }
        setIsAccepted(true)
      },
      (err) => {
        console.log(err)
        localStorage.removeItem('coordinates')
        setIsAccepted(false)
      }
    )
  }

  return { findGeoLocation, isAccepted }
}
