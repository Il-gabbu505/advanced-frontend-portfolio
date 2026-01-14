import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IncomeItem } from '../../types/income'
import { nanoid } from 'nanoid'


interface IncomeState {
items: IncomeItem[]
}


const initialState: IncomeState = { items: [] }


const incomeSlice = createSlice({
name: 'income',
initialState,
reducers: {
addIncome: {
reducer(state, action: PayloadAction<IncomeItem>) {
state.items.push(action.payload)
},
prepare(payload: Omit<IncomeItem, 'id'>) {
return { payload: { ...payload, id: nanoid() } }
},
},
editIncome(state, action: PayloadAction<IncomeItem>) {
const idx = state.items.findIndex((i) => i.id === action.payload.id)
if (idx >= 0) state.items[idx] = action.payload
},
deleteIncome(state, action: PayloadAction<string>) {
state.items = state.items.filter((i) => i.id !== action.payload)
},
clearIncomes() {
return initialState
},
},
})


export const { addIncome, editIncome, deleteIncome, clearIncomes } = incomeSlice.actions
export default incomeSlice.reducer