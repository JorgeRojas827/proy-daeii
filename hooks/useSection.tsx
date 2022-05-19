import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setSection } from '../redux/slices/CurrentSectionSlice'

export const useSection = () => {
  const dispatch = useAppDispatch()
  const section = useAppSelector((state) => state.section)

  const setCurrentSection = (text: string) => {
    dispatch(setSection(text.toLowerCase()))
  }

  return {
    setCurrentSection,
    section,
  }
}
