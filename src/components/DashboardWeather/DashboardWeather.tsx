import React, {useEffect} from 'react'
import ThemeMode from './ThemeMode/ThemeMode'
import {useAppDispatch, useAppSelector} from '../../store'
import {setTime} from '../../store/time/timeState'
import DashboardSlider from './DashboardSlider'
import Spinner from '../common/Spinner'

const DashboardWeather = () => {
  const dispatch = useAppDispatch()
  const { isLoading, date, forecast } = useAppSelector((state) => state.weather)
  const { time, timesOfDay } = useAppSelector((state) => state.time)

  useEffect(() => {
    setInterval(() => {
      dispatch(setTime(new Date()))
    }, 60000)
  }, [])

  return (
    <div
      className={`${
        isLoading && 'hidden'
      } dashboard lg:flex flex-col gap-[30px] bg-[#F0F5FF] p-[30px] overflow-x-hidden`}
    >
      <div className={'flex justify-between items-start mb-[30px] lg:m-0'}>
        <div className={'text-main-blue flex flex-col gap-[15px] font-bold'}>
          <h2 className={'text-6xl uppercase'}>{time}</h2>
          <div className={'text-dark-blue font-semibold'}>
            {date.day}, {date.number} {date.month}, {date.year}
          </div>
          <h3 className={'text-4xl'}>Good {timesOfDay}</h3>
        </div>
        <ThemeMode />
      </div>
      <div className={'grow flex flex-col justify-between gap-[30px]'}>
        {!isLoading ? (
          forecast?.list &&
          Array.from(Object.values(forecast.list)).map((weather, i) => (
            <DashboardSlider index={i} forecast={weather} key={i} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default DashboardWeather
