import React from 'react'
import Search from '../Search/Search'
import Card from '../Card/Card'
import Details from '../Details/Details'
import { useAppSelector } from '../../store'
import Spinner from '../common/Spinner'

const TodayWeather = () => {
  const { isLoading } = useAppSelector((state) => state.weather)

  return (
    <div
      className={
        'lg:basis-[400px] md:p-[30px] p-[10px] flex flex-col gap-[15px] justify-between overflow-x-hidden text-white'
      }
    >
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

export default TodayWeather
