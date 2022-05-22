import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {IWeather} from '../../types/types'
import DashboardCard from './DashboardCard'

const DashboardSlider = ({
  forecast,
  index,
}: {
  forecast: IWeather[]
  index: number
}) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  // @ts-ignore
  const currentDay =
    days[new Date(forecast[index].dt_txt.split('-').join(', ')).getDay()]

  return (
    <div>
      <h3 className={'mb-[15px] font-semibold text-2xl'}>
        {index === 0 ? 'Today' : currentDay}
      </h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          540: {
            slidesPerView: 3,
          },
          720: {
            slidesPerView: 4,
          },
          920: {
            slidesPerView: 5,
          },
          990: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 6,
          },
          1640: {
            slidesPerView: 8,
          },
        }}
      >
        {forecast &&
          forecast.map((weather) => (
            <SwiperSlide key={weather.id}>
              <DashboardCard
                weather={weather}
                currentDay={index === 0 ? 'Today' : currentDay}
                key={weather.id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default DashboardSlider
