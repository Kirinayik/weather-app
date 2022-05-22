import {createSlice} from '@reduxjs/toolkit'
import getTimeOfDay from '../../helpers/getTimeOfDay'

const timeSlice = createSlice({
  name: 'time',
  initialState: {
    timesOfDay: '',
    time: '00:00',
  },
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload.toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      })
      state.timesOfDay = getTimeOfDay(+state.time.slice(0, 2))
    },
  },
})

export const { setTime } = timeSlice.actions
export default timeSlice.reducer
