import api from '../resources/api'
import { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { IUser } from '../interfaces/IUser'
import { setUser } from '../redux/slices/CurrentUserSlice'
import { useRouter } from 'next/router'
import { setSection } from '../redux/slices/CurrentSectionSlice'

export const useCurrentUser = () => {
  const [errorLogin, setErrorLogin] = useState(false)
  const router = useRouter()
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

  return { loginUser, errorLogin }
}
