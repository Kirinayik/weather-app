import React from 'react'
import Search from './Search/Search'
import Card from './Card/Card'
import Details from './Details/Details'
import {useAppSelector} from '../../store'
import Spinner from '../common/Spinner'
import ThemeMode from '../DashboardWeather/ThemeMode/ThemeMode'

const CurrentWeather = () => {
  const { isLoading } = useAppSelector((state) => state.weather)

  return (
    <div
      className={
        'lg:basis-[400px] md:p-[30px] p-[10px] pt-[75px] md:pt-[10px] dark:bg-main-black flex flex-col gap-[15px] justify-between overflow-x-hidden text-white'
      }
    >
      <div className="theme-mode md:hidden">
        <ThemeMode />
      </div>
      <Search />
      {!isLoading ? (
        <>
          <Card />
          <Details />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default CurrentWeather
