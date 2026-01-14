import { configureStore } from '@reduxjs/toolkit'
import incomeReducer from '../features/income/incomeSlice'
import expenseReducer from '../features/expenses/expenseSlice'
import goalsReducer from '../features/goals/goalsSlice'
import { saveState, loadState } from '../utils/localStorage'


const preloadedState = loadState() as {
  income: ReturnType<typeof incomeReducer>
  expenses: ReturnType<typeof expenseReducer>
  goals: ReturnType<typeof goalsReducer>
}



export const store = configureStore({
reducer: {
income: incomeReducer,
expenses: expenseReducer,
goals: goalsReducer,
},
preloadedState,
})


// subscribe to save to localStorage (simple throttle)
let saving = false
store.subscribe(() => {
if (saving) return
saving = true
setTimeout(() => {
saveState({
income: store.getState().income,
expenses: store.getState().expenses,
goals: store.getState().goals,
})
saving = false
}, 300)
})


// infer types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
