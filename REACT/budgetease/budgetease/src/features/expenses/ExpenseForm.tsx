import React, { useState } from 'react'
import { Box, TextField, Button, MenuItem } from '@mui/material'
import { useAppDispatch } from '../../app/hooks'
import { addExpense } from './expenseSlice'


const categories = ['Food', 'Transport', 'Housing', 'Supplies', 'Leisure', 'Other']


const ExpenseForm: React.FC = () => {
const dispatch = useAppDispatch()
const [title, setTitle] = useState('')
const [amount, setAmount] = useState<number | ''>('')
const [category, setCategory] = useState(categories[0])


const onSubmit = (e: React.FormEvent) => {
e.preventDefault()
if (!title || !amount) return
dispatch(
addExpense({
title,
amount: Number(amount),
category,
happenedOn: new Date().toISOString(),
})
)
setTitle('')
setAmount('')
}


return (
<Box component="form" onSubmit={onSubmit} sx={{ display: 'grid', gap: 1 }}>
<TextField label="Expense" value={title} onChange={(e) => setTitle(e.target.value)} size="small" />
<TextField
label="Amount"
type="number"
value={amount}
onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
size="small"
/>
<TextField select size="small" value={category} onChange={(e) => setCategory(e.target.value)}>
{categories.map((c) => (
<MenuItem key={c} value={c}>
{c}
</MenuItem>
))}
</TextField>
<Button type="submit" variant="contained" size="small">
Add expense
</Button>
</Box>
)
}


export default ExpenseForm