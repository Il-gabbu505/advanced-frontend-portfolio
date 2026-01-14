import React from 'react'
import { Container, Box } from '@mui/material'


const MobileLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
return (
<Container maxWidth="sm" sx={{ px: 1 }}>
<Box sx={{ pb: 8 }}>{children}</Box>
</Container>
)
}


export default MobileLayout