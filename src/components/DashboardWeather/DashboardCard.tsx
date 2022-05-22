import React from 'react'
import {IWeather} from '../../types/types'
import CardIcon from '../CurrentWeather/Card/CardIcon'
import {useAppDispatch, useAppSelector} from '../../store'
import {setCurrentWeather} from '../../store/weather/weatherState'

const DashboardCard = ({
  weather,
  currentDay,
}: {
  weather: IWeather
  currentDay: string
}) => {
  const dispatch = useAppDispatch()
  const city = useAppSelector((state) => state.weather.forecast?.city)
  const id = useAppSelector((state) => state.weather.weather?.id)
  const handleSetWeather = () => {
    dispatch(
      setCurrentWeather({
        ...weather,
        dt_txt: currentDay,
        city: city?.name,
        country: city?.country,
      })
    )
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`dashboard-card font-semibold ${
        id === weather.id && 'dashboard-card--active'
      }`}
      onClick={handleSetWeather}
    >
      <div>
        <CardIcon icon={weather?.weather[0].icon} />
      </div>
      <div>{weather && weather?.dt_txt?.split(' ')[1].slice(0, -3)}</div>
      <div>
        {Math.floor(weather?.temp)}
        <span className={'ml-[3px]'}>°</span>
      </div>
    </div>
  )
}

export default DashboardCard
