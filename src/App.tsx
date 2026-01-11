import { useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  const mode = useAppSelector(state => state.theme.mode);
  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);
  return <AppRoutes/>;
}

export default App;
