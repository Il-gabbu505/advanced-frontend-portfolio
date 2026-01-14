import IncomeList from './features/income/IncomeList'
import ExpenseForm from './features/expenses/ExpenseForm'
import {ExpenseList} from './features/expenses/ExpenseList.tsx'
import GoalForm from './features/goals/GoalForm'
import GoalsList from './features/goals/GoalsList.tsx'
import Dashboard from './components/Dashboard'
import { Box, Typography, Divider } from '@mui/material'
import MobileLayout from './components/MobileLayout.tsx'
import NavBar from './components/NavBar.tsx'
import IncomeForm from './features/income/IncomeForm.tsx'


function App() {
return (
<div>
<NavBar/>
<MobileLayout>
<Box sx={{ display: 'grid', gap: 2 }}>
<Dashboard />


<Divider />


<Typography variant="h6">Add income</Typography>
<IncomeForm />
<IncomeList />


<Divider />


<Typography variant="h6">Add expense</Typography>
<ExpenseForm />
<ExpenseList />


<Divider />


<Typography variant="h6">Savings goals</Typography>
<GoalForm />
<GoalsList />
</Box>
</MobileLayout>
</div>
)
}


export default App