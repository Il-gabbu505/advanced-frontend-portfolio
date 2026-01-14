import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'


const NavBar: React.FC = () => {
return (
<AppBar position="sticky">
<Toolbar>
<Typography variant="h6" component="div">
BudgetEase
</Typography>
</Toolbar>
</AppBar>
)
}


export default NavBar