import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { deleteExpense } from './expenseSlice'
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export function ExpenseList() {
  const expenses = useAppSelector(state => state.expenses.items)
  const dispatch = useAppDispatch()

  if (!expenses || expenses.length === 0) {
    return <Typography color="text.secondary">No expenses yet.</Typography>
  }

  return (
    <List>
      {expenses.map(exp => (
        <ListItem
          key={exp.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => dispatch(deleteExpense(exp.id))}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={exp.title}
            secondary={`€${exp.amount} • ${exp.category}`}
          />
        </ListItem>
      ))}
    </List>
  )
}
