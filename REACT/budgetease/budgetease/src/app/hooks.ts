import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Typed dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Typed selector (manual typing, works on all react-redux versions)
export const useAppSelector: <TSelected>(
  selector: (state: RootState) => TSelected
) => TSelected = useSelector
