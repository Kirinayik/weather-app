import React, {useEffect} from 'react'
import './style/index.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DashboardWeather from './components/DashboardWeather/DashboardWeather'
import {useAppDispatch} from './store'
import {getCurrentDate, getWeatherFetch} from './store/weather/weatherState'
import {setTime} from './store/time/timeState'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentDate())
    dispatch(setTime(new Date()))
    dispatch(getWeatherFetch())
  }, [])

  return (
    <div className={'flex flex-col min-h-[100vh] lg:h-[100vh] lg:flex-row'}>
      <CurrentWeather />
      <DashboardWeather />
    </div>
  )
}

export default App
