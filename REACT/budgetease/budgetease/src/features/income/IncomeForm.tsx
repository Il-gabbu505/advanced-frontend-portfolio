import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'  // your typed Redux hook
import { addIncome } from './incomeSlice'         // your income slice action
import { Box, TextField, MenuItem, Button } from '@mui/material'

const sourceOptions = [
  { value: 'stipend', label: 'Stipend' },
  { value: 'salary', label: 'Salary' },
  { value: 'freelance', label: 'Freelance' },
]


const IncomeForm: React.FC = () => {
const dispatch = useAppDispatch()
const [title, setTitle] = useState('')
const [amount, setAmount] = useState<number | ''>('')
const [sourceType, setSourceType] = useState('stipend')


const onSubmit = (e: React.FormEvent) => {
e.preventDefault()
if (!title || !amount) return
dispatch(
addIncome({
title,
amount: Number(amount),
sourceType: sourceType as any,
receivedOn: new Date().toISOString(),
})
)
setTitle('')
setAmount('')
}


return (
<Box component="form" onSubmit={onSubmit} sx={{ display: 'grid', gap: 1 }}>
<TextField label="Source title" value={title} onChange={(e) => setTitle(e.target.value)} size="small" />
<TextField
label="Amount"
type="number"
value={amount}
onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
size="small"
/>
<TextField select size="small" value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
{sourceOptions.map((o) => (
<MenuItem key={o.value} value={o.value}>
{o.label}
</MenuItem>
))}
</TextField>
<Button type="submit" variant="contained" size="small">
Add income
</Button>
</Box>
)
}


export default IncomeForm