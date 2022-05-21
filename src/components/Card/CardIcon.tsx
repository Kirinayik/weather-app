import React from 'react'
import {useAppSelector} from '../../store'

const CardIcon = () => {
  const { weather } = useAppSelector((state) => state.weather)

  return (
    <div>
      {weather?.weather[0].icon && (
        <img
          src={`${process.env.WEATHER_ICON}${weather?.weather[0].icon.replace(
            /[dn]/g,
            ''
          )}d@2x.png`}
          alt={''}
        />
      )}
    </div>
  )
}

export default CardIcon
