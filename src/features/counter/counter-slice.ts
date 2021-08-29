// createslice ---- main api function hoga jisme hum redux ki logic karngy
// Payloadactions --- typescript type that represent this is the contence of one given action onjects
// DUCKS Pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface CounterState {
  value: number
}
const initialState: CounterState = {
  value: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increamented(state) {
      state.value++
    },
  },
})

export const { increamented } = counterSlice.actions
export default counterSlice.reducer
