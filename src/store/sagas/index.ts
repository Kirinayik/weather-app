import {all} from 'redux-saga/effects'
import watcherWeather from '../weather/weatherSaga'

export default function* rootSaga() {
  yield all([watcherWeather()])
}
