import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IWeather} from '../../types/types'

interface IWeatherSlice {
  date: {
    day: string
    month: string
    number: number
  }
  weather: IWeather | null
  forecast: IWeather[] | null
  isLoading: boolean
  isError: boolean
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    date: {
      day: '',
      number: 1,
      month: '',
    },
    weather: null,
    forecast: null,
    isLoading: false,
    isError: false,
  } as IWeatherSlice,
  reducers: {
    getWeatherFetch: (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = true
    },
    getWeatherSuccess: (state, action) => {
      const { currentWeather, forecastWeather } = action.payload
      state.weather = currentWeather
      state.forecast = forecastWeather
      state.isLoading = false
      state.isError = false
    },
    getCurrentDate: (state) => {
      const currentDate = new Date()
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      state.date.number = currentDate.getDate()
      state.date.day = days[currentDate.getDay()]
      state.date.month = month[currentDate.getMonth()]
    },
    getWeatherFailure: (state) => {
      state.isError = true
      state.isLoading = false
    },
  },
})

export const {
  getWeatherFetch,
  getWeatherSuccess,
  getCurrentDate,
  getWeatherFailure,
} = weatherSlice.actions
export default weatherSlice.reducer
