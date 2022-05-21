import React, { useEffect } from 'react'
import './style/index.css'
import TodayWeather from './components/TodayWeather/TodayWeather'
import DashboardWeather from './components/DashboardWeather/DashboardWeather'
import { useAppDispatch } from './store'
import { getCurrentDate, getWeatherFetch } from './store/weather/weatherState'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentDate())
    dispatch(getWeatherFetch())
  }, [])

  return (
    <div className={'flex flex-col min-h-[100vh] lg:h-[100vh] lg:flex-row'}>
      <TodayWeather />
      <DashboardWeather />
    </div>
  )
}

export default App
