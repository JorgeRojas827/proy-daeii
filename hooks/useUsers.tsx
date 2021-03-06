import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
  getUsers,
  deleteUser,
  addUsuario,
  editUsuario,
} from '../redux/slices/UserSlice'
import { toast } from 'react-toastify'

export const useUsers = () => {
  const dispatch = useAppDispatch()
  const usuarios = useAppSelector((state) => state.usuarios)

  const obtenerUsuarios = async () => {
    dispatch(getUsers())
  }

  const eliminarUsuario = (id: number) => {
    dispatch(deleteUser(id))

    toast.warning('Usuario eliminado', { position: 'bottom-right' })
  }

  const agregarUsuario = (user: any) => {
    dispatch(addUsuario(user))
  }

  const editarUsuario = (user: any, id: number) => {
    dispatch(editUsuario({ datos: user, id }))
  }

  return {
    usuarios,
    obtenerUsuarios,
    eliminarUsuario,
    editarUsuario,
    agregarUsuario,
  }
}
