import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import type { GoalItem } from '../../types/goal'


interface GoalsState {
items: GoalItem[]
}


const initialState: GoalsState = { items: [] }


const goalsSlice = createSlice({
name: 'goals',
initialState,
reducers: {
addGoal: {
reducer(state, action: PayloadAction<GoalItem>) {
state.items.push(action.payload)
},
prepare(payload: Omit<GoalItem, 'id'>) {
return { payload: { ...payload, id: nanoid() } }
},
},
editGoal(state, action: PayloadAction<GoalItem>) {
const idx = state.items.findIndex((g) => g.id === action.payload.id)
if (idx >= 0) state.items[idx] = action.payload
},
deleteGoal(state, action: PayloadAction<string>) {
state.items = state.items.filter((g) => g.id !== action.payload)
},
},
})


export const { addGoal, editGoal, deleteGoal } = goalsSlice.actions
export default goalsSlice.reducer