export interface IWeather {
  humidity: number
  pressure: number
  temp: number
  visibility: number
  wind: {
    speed: number
  }
  country?: string
  city?: string
  id: string
  weather: { main: string; description: string; icon: string }[]
  clouds: {
    all: number
  }
  rain?: {
    '1h': number
  }
  snow?: {
    '1h': number
  }
  dt_txt?: string
}

export interface IWeatherError {
  cod: string
  message: string
}
