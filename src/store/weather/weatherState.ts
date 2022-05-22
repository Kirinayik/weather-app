import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IWeather} from '../../types/types'

interface IWeatherSlice {
  date: {
    day: string
    month: string
    number: number
    year: number
  }
  weather: IWeather | null
  forecast: {
    list: {
      1: IWeather[]
      2: IWeather[]
      3: IWeather[]
      4: IWeather[]
      5: IWeather[]
    }
    city: {
      name: string
      country: string
      id: number
    }
  } | null
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
      year: 0,
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
      const currentDate = new Date().toDateString().split(' ')
      state.date = {
        day: currentDate[0],
        number: +currentDate[2],
        month: currentDate[1],
        year: +currentDate[3],
      }
    },
    getWeatherFailure: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload
      state.isLoading = false
    },
    setCurrentWeather: (state, action: PayloadAction<IWeather>) => {
      state.weather = action.payload
    },
  },
})

export const {
  getWeatherFetch,
  getWeatherSuccess,
  getCurrentDate,
  getWeatherFailure,
  setCurrentWeather,
} = weatherSlice.actions
export default weatherSlice.reducer
