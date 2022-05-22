import React from 'react'
import {useAppSelector} from '../../../store'

const Details = () => {
  const { weather } = useAppSelector((state) => state.weather)

  return (
    <div className={'card card-details bg-gradient'}>
      <div className="flex flex-col gap-[10px]">
        <div>
          Description:{' '}
          {
            ((weather?.weather[0].description[0].toUpperCase() as string) +
              weather?.weather[0].description.slice(1)) as string
          }
        </div>
        <div className="flex items-center justify-between gap-[10px]">
          <div>Pressure:</div>
          <div>{weather?.pressure} hPa</div>
        </div>
        <div className="flex items-center justify-between gap-[10px]">
          <div>Visibility:</div>
          <div>{Math.floor((weather?.visibility as number) / 1000)} km</div>
        </div>
        <div className="flex items-center justify-between gap-[10px]">
          <div>Clouds:</div>
          <div>{weather?.clouds.all} %</div>
        </div>
        {weather?.rain && (
          <div className="flex items-center justify-between gap-[10px]">
            <div>Rain:</div>
            <div>{weather.rain['1h']} mm</div>
          </div>
        )}
        {weather?.snow && (
          <div className="flex items-center justify-between gap-[10px]">
            <div>Snow:</div>
            <div>{weather.snow['1h']} mm</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Details
