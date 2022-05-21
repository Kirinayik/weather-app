import axios from 'axios'

export const $api = axios.create({
  baseURL: process.env.WEATHER_API,
})

$api.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

$api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
