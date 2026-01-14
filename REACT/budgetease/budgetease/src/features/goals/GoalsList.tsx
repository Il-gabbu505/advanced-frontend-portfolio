import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteGoal } from './goalsSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { List, ListItem, ListItemText, IconButton, Typography, LinearProgress } from '@mui/material'


const GoalsList: React.FC = () => {
const items = useAppSelector((s) => s.goals.items)
const dispatch = useAppDispatch()


if (!items.length) return <Typography variant="body2">No savings goals yet.</Typography>


return (
<List>
{items.map((g) => {
const pct = Math.min(100, (g.savedAmount / Math.max(1, g.targetAmount)) * 100)
return (
<ListItem key={g.id} secondaryAction={<IconButton onClick={() => dispatch(deleteGoal(g.id))}><DeleteIcon /></IconButton>}>
<ListItemText
primary={`${g.title} — €${g.savedAmount.toFixed(2)} / €${g.targetAmount.toFixed(2)}`}
secondary={<LinearProgress variant="determinate" value={pct} sx={{ mt: 1 }} />}
/>
</ListItem>
)
})}
</List>
)
}


export default GoalsList