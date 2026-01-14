import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App'
import { store } from './app/store.ts'


const theme = createTheme({
palette: {
mode: 'light',
},
components: {},
})


createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<Provider store={store}>
<ThemeProvider theme={theme}>
<CssBaseline />
<App />
</ThemeProvider>
</Provider>
</React.StrictMode>
)