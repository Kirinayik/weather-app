import React from 'react'
import CardLocation from './CardLocation'
import CardDetails from './CardDetails'
import CardIcon from './CardIcon'
import {useAppSelector} from '../../../store'

const Card = () => {
  const { weather, date } = useAppSelector((state) => state.weather)

  return (
    <div className={'card grow bg-gradient'}>
      <div className="flex flex-col h-full">
        <CardLocation />
        <div
          className={
            'grow flex flex-col items-center justify-center gap-y-[10px]'
          }
        >
          <CardIcon icon={weather?.weather[0].icon} />
          <div>
            {weather?.dt_txt ? weather.dt_txt : 'Today'},{' '}
            <span>
              {date.number} {date.month}
            </span>
          </div>
          <div className={'flex items-start text-7xl font-semibold'}>
            {Math.floor(weather?.temp as number)}
            <span className={'text-2xl ml-[3px]'}>°C</span>
          </div>
          <div className={'font-medium mb-[10px] text-center'}>
            {weather?.weather[0].main}
          </div>
          <CardDetails />
        </div>
      </div>
    </div>
  )
}

export default Card
