import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { deleteLibro, getLibros, addLibro } from '../redux/slices/LibroSlice'
import { ILibro } from '../interfaces/ILibro'
import { toast } from 'react-toastify'

export const useLibros = () => {
  const libros = useAppSelector((state) => state.libros)
  const dispatch = useAppDispatch()

  const obtenerLibros = async () => {
    dispatch(getLibros())
  }

  const eliminarLibro = (id: string) => {
    dispatch(deleteLibro(id))
    toast.warning('Libro eliminado', { position: 'bottom-right' })
  }

  const agregarLibro = (libro: any) => {
    dispatch(addLibro(libro))
  }

  return {
    libros,
    obtenerLibros,
    eliminarLibro,
    agregarLibro,
  }
}
