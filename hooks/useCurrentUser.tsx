import api from '../resources/api'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { IUser } from '../interfaces/IUser'
import { reset, setUser } from '../redux/slices/CurrentUserSlice'
import { useRouter } from 'next/router'
import { setSection } from '../redux/slices/CurrentSectionSlice'

export const useCurrentUser = () => {
  const [errorLogin, setErrorLogin] = useState(false)
  const router = useRouter()
  const currentUser = useAppSelector((state) => state.currentUser)
  const dispatch = useAppDispatch()

  const loginUser = async (usuario: string, password: string) => {
    try {
      const { data } = await api.get<IUser>(`login/${usuario}/${password}`)
      dispatch(setUser(data))
      if (data) {
        router.push('/dashboard')
        dispatch(setSection('libros'))
      }
    } catch (error) {
      setErrorLogin(true)
    }
  }

  const logoutUser = () => {
    dispatch(reset())
    router.push('/')
  }

  return { loginUser, errorLogin, currentUser, logoutUser }
}
