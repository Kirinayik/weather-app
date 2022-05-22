import React, {useEffect} from 'react'
import './style/index.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DashboardWeather from './components/DashboardWeather/DashboardWeather'
import {useAppDispatch, useAppSelector} from './store'
import {getCurrentDate, getWeatherFetch} from './store/weather/weatherState'
import {setTime} from './store/time/timeState'
import {setThemeMode} from './store/environments/environmentsState'

const App = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.environments)

  useEffect(() => {
    dispatch(getCurrentDate())
    dispatch(setTime(new Date()))
    dispatch(getWeatherFetch())

    if (localStorage.getItem('mode')) {
      dispatch(setThemeMode(localStorage.getItem('mode') as 'light' | 'dark'))
    }
  }, [])

  return (
    <div
      className={`flex ${
        mode === 'dark' ? 'dark' : ''
      } flex-col min-h-[100vh] lg:h-[100vh] lg:flex-row`}
    >
      <CurrentWeather />
      <DashboardWeather />
    </div>
  )
}

export default App
