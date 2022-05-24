import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import { IUser } from '../../interfaces/IUser'
import { useUsers } from '../../hooks/useUsers'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

interface IProps {
  e: IUser
  toggleModal: () => void
  setType: React.Dispatch<React.SetStateAction<string>>
  setSelectedData: React.Dispatch<React.SetStateAction<any>>
}

export const TemplateUser = ({
  e,
  setType,
  toggleModal,
  setSelectedData,
}: IProps) => {
  const { eliminarUsuario } = useUsers()
  return (
    <tr className="h-14 border-b border-black border-opacity-10">
      <td className="px-10">{e.idUsuario}</td>
      <td className="px-10">{e.usuario}</td>
      <td className="px-10">{e.password}</td>

      <td className="mt-3 flex space-x-4 px-10">
        <PencilIcon
          onClick={() => {
            toggleModal()
            setType('editar')
            setSelectedData(e)
          }}
          className="w-6 cursor-pointer"
        />
        <TrashIcon
          onClick={() => eliminarUsuario(e.idUsuario)}
          className="w-6 cursor-pointer"
        />
      </td>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </tr>
  )
}
