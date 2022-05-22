import {IWeather} from '../types/types'
import {nanoid} from '@reduxjs/toolkit'

export const formatWeatherResponse = (data: any): IWeather => {
  const currentResult: IWeather = {
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    temp: data.main.temp,
    visibility: data.visibility,
    wind: {
      speed: data.wind.speed,
    },
    id: nanoid(),
    weather: [
      ...data.weather.filter(
        (el: {
          main: string
          description: string
          icon: string
          id: number
        }) => {
          return {
            main: el.main,
            description: el.description,
            icon: el.icon,
          }
        }
      ),
    ],
    clouds: {
      all: data.clouds.all,
    },
  }

  if (!!data.dt_txt) currentResult.dt_txt = data.dt_txt
  if (!!data.name) currentResult.city = data.name
  if (!!data.sys.country) currentResult.country = data.sys.country
  if (!!data.rain) currentResult.rain = { '1h': data.rain['1h'] }
  if (!!data.snow) currentResult.snow = { '1h': data.snow['1h'] }

  return currentResult
}
