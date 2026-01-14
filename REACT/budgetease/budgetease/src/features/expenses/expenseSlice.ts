import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction} from '@reduxjs/toolkit'
import type { ExpenseItem } from '../../types/expense'
import { nanoid } from 'nanoid'


interface ExpenseState {
items: ExpenseItem[]
}


const initialState: ExpenseState = { items: [] }


const expenseSlice = createSlice({
name: 'expenses',
initialState,
reducers: {
addExpense: {
reducer(state, action: PayloadAction<ExpenseItem>) {
state.items.push(action.payload)
},
prepare(payload: Omit<ExpenseItem, 'id'>) {
return { payload: { ...payload, id: nanoid() } }
},
},
editExpense(state, action: PayloadAction<ExpenseItem>) {
const idx = state.items.findIndex((e) => e.id === action.payload.id)
if (idx >= 0) state.items[idx] = action.payload
},
deleteExpense(state, action: PayloadAction<string>) {
state.items = state.items.filter((e) => e.id !== action.payload)
},
clearExpenses() {
return initialState
},
},
})


export const { addExpense, editExpense, deleteExpense, clearExpenses } = expenseSlice.actions
export default expenseSlice.reducer