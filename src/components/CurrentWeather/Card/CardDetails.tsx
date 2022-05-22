import React from 'react'
import {useAppSelector} from '../../../store'
import windIcon from '../../../img/wind.png'
import humidityIcon from '../../../img/humidity.png'

const CardDetails = () => {
  const { weather } = useAppSelector((state) => state.weather)

  return (
    <div
      className={
        'flex flex-col justify-center gap-[10px] text-[16px] weight-medium'
      }
    >
      <div
        className={
          'flex justify-between items-center relative pl-[30px] gap-[50px]'
        }
      >
        <div className={'flex items-center gap-[5px]'}>
          <img
            draggable={false}
            src={windIcon}
            alt={''}
            className={'absolute top-0 left-0'}
          />
          <div>Wind</div>
        </div>
        <div className={'flex justify-end'}>{weather?.wind.speed} m/s</div>
      </div>
      <div
        className={
          'flex justify-between items-center relative pl-[30px] gap-[50px]'
        }
      >
        <div className={'flex items-center gap-[5px]'}>
          <img
            draggable={false}
            src={humidityIcon}
            alt={''}
            className={'absolute top-0 left-0'}
          />
          <div>Hum</div>
        </div>
        <div className={'flex justify-end'}>{weather?.humidity} %</div>
      </div>
    </div>
  )
}

export default CardDetails
