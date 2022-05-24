import { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks'
import { useLibros } from './useLibros'
import { useState } from 'react'
import { ILibro } from '../interfaces/ILibro'
import { IUser } from '../interfaces/IUser'
import { mappingObjects } from '../helpers/functions'
import { useUsers } from './useUsers'

export const useTable = () => {
  const section = useAppSelector((state) => state.section)
  const { obtenerLibros, libros } = useLibros()
  const { obtenerUsuarios, usuarios } = useUsers()
  const [fields, setFields] = useState<string[]>([])
  const [data, setData] = useState<any[]>([])

  const fetchData = () => {
    switch (section) {
      case 'libros':
        obtenerLibros()
      case 'usuarios':
        obtenerUsuarios()
      default:
        setData([])
    }
  }

  useEffect(() => {
    switch (section) {
      case 'libros':
        setData(libros)
        setFields(mappingObjects<ILibro>(libros[0]))
        break
      case 'usuarios':
        setData(usuarios)
        setFields(mappingObjects<IUser>(usuarios[0]))
        break
      default:
        setData([])
    }
  }, [usuarios, libros])

  return {
    fetchData,
    data,
    fields,
  }
}
