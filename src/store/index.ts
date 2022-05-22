import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weather/weatherState'
import timeReducer from './time/timeState'
import environmentsReducer from './environments/environmentsState'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    time: timeReducer,
    environments: environmentsReducer,
  },
  middleware: [saga],
})

saga.run(rootSaga)

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
