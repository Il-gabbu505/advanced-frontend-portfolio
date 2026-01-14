import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useAppDispatch } from '../../app/hooks'
import { addGoal } from './goalsSlice'


const GoalForm: React.FC = () => {
const dispatch = useAppDispatch()
const [title, setTitle] = useState('')
const [target, setTarget] = useState<number | ''>('')


const onSubmit = (e: React.FormEvent) => {
e.preventDefault()
if (!title || !target) return
dispatch(
addGoal({
title,
targetAmount: Number(target),
savedAmount: 0,
})
)
setTitle('')
setTarget('')
}


return (
<Box component="form" onSubmit={onSubmit} sx={{ display: 'grid', gap: 1 }}>
<TextField label="Goal" value={title} onChange={(e) => setTitle(e.target.value)} size="small" />
<TextField
label="Target Amount"
type="number"
value={target}
onChange={(e) => setTarget(e.target.value === '' ? '' : Number(e.target.value))}
size="small"
/>
<Button type="submit" variant="contained" size="small">
Add goal
</Button>
</Box>
)
}


export default GoalForm