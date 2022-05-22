import {all, call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {getWeatherFailure, getWeatherSuccess} from './weatherState'
import {$api} from '../../http'
import {formatWeatherResponse} from '../../helpers/formatWeatherResponse'
import {IWeather, IWeatherError} from '../../types/types'
import getRandomCity from '../../helpers/getRandomCity'
import {PayloadAction} from '@reduxjs/toolkit'

async function fetchWeather(type: 'current' | 'forecast', params: string) {
  try {
    if (type === 'current') {
      const { data } = await $api.get(
        `weather?${params}&units=metric&appid=${process.env.WEATHER_KEY}`
      )

      return formatWeatherResponse(data)
    } else {
      const { data } = await $api.get(
        `forecast?${params}&units=metric&appid=${process.env.WEATHER_KEY}`
      )

      const formatForecast = data.list.map((el: any) =>
        formatWeatherResponse(el)
      )

      const currentDayNumber = new Date().getDate()
      const firstForecastList = formatForecast.filter(
        (el: any) => currentDayNumber === +el.dt_txt.split(' ')[0].split('-')[2]
      )
      const resultForecast = {
        '1': firstForecastList,
        '2': formatForecast.slice(
          firstForecastList.length,
          firstForecastList.length + 8
        ),
        '3': formatForecast.slice(
          firstForecastList.length + 8,
          firstForecastList.length + 16
        ),
        '4': formatForecast.slice(
          firstForecastList.length + 16,
          firstForecastList.length + 24
        ),
        '5': formatForecast.slice(firstForecastList.length + 24),
      }

      return {
        city: {
          name: data.city.name,
          country: data.city.country,
          id: data.city.id,
        },
        list: resultForecast,
      }
    }
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      return { error: e.response.data as IWeatherError }
    } else {
      return {
        error: {
          cod: 500,
          message: 'Something went wrong',
        },
      }
    }
  }
}

function* weatherSaga(action: PayloadAction<string | undefined>) {
  let params: string

  if (!action.payload) {
    const coordinates = JSON.parse(
      localStorage.getItem('coordinates') as string
    )
    params = coordinates
      ? `lat=${coordinates.lat}&lon=${coordinates.lon}`
      : `q=${getRandomCity()}`
  } else {
    params = action.payload
  }

  const currentWeather: Promise<IWeather | { error: IWeatherError }> =
    yield call(fetchWeather, 'current', params)

  if ('error' in currentWeather) {
    yield put(getWeatherFailure(true))
  } else {
    const forecastWeather: Promise<IWeather | { error: IWeatherError }> =
      yield call(fetchWeather, 'forecast', params)

    yield put(getWeatherSuccess({ currentWeather, forecastWeather }))
  }
}

export default function* watcherWeather() {
  yield all([takeLatest('weather/getWeatherFetch', weatherSaga)])
}
