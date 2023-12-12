import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../storeConstructor'
import type { AppDispatch } from '../storeConstructor'
import { useDispatch } from 'react-redux'

// useSelector hook for TS - for typed selections
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// useDispatch for TS
export const useAppDispatch = () => useDispatch<AppDispatch>()
