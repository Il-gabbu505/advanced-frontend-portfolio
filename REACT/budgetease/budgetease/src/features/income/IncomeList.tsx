import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteIncome } from './incomeSlice'


const IncomeList: React.FC = () => {
const items = useAppSelector((s) => s.income.items)
const dispatch = useAppDispatch()


if (!items.length) return <Typography variant="body2">No incomes tracked yet.</Typography>


return (
<List>
{items.map((i) => (
<ListItem key={i.id} secondaryAction={
<IconButton edge="end" onClick={() => dispatch(deleteIncome(i.id))}>
<DeleteIcon />
</IconButton>
}>
<ListItemText primary={`${i.title} — €${i.amount}`} secondary={i.sourceType} />
</ListItem>
))}
</List>
)
}


export default IncomeList