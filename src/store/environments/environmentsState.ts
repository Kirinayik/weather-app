import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const environmentsSlice = createSlice({
  name: 'environments',
  initialState: {
    mode: 'light',
  } as { mode: 'light' | 'dark' },
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload
    },
  },
})

export const { setThemeMode } = environmentsSlice.actions
export default environmentsSlice.reducer
