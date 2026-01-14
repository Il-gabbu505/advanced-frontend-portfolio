import React, { useMemo } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from 'recharts'
import { useAppSelector } from '../app/hooks' // your typed selector

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const Dashboard: React.FC = () => {
  // Example: get income/expense data from Redux store
  const incomes = useAppSelector((state) => state.income.items)
  const expenses = useAppSelector((state) => state.expenses.items)

  const totalIncome = useMemo(() => incomes.reduce((sum, i) => sum + i.amount, 0), [incomes])
  const totalExpense = useMemo(() => expenses.reduce((sum, e) => sum + e.amount, 0), [expenses])
  const balance = totalIncome - totalExpense

  const expensesByCategory = useMemo(
    () =>
      Object.entries(
        expenses.reduce((acc: Record<string, number>, e) => {
          acc[e.category] = (acc[e.category] || 0) + e.amount
          return acc
        }, {})
      ).map(([name, value]) => ({ name, value })),
    [expenses]
  )

  const timeseries = useMemo(() => {
    // Example: balance over time, could be replaced with real data
    return [{ date: '2025-11-01', value: balance }]
  }, [balance])

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography>Income: €{totalIncome.toFixed(2)}</Typography>
        <Typography>Expenses: €{totalExpense.toFixed(2)}</Typography>
        <Typography>Balance: €{balance.toFixed(2)}</Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1">Expenses by category</Typography>
        <Box sx={{ height: 220 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={expensesByCategory} outerRadius={80} label>
                {expensesByCategory.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {/* Balance over time */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1">Balance over time</Typography>
        <Box sx={{ height: 200 }}>
          <ResponsiveContainer>
            <AreaChart data={timeseries}>
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  )
}

export default Dashboard
