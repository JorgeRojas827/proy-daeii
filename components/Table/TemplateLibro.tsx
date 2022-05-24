import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import { ILibro } from '../../interfaces/ILibro'
import 'react-toastify/dist/ReactToastify.css'
import { useLibros } from '../../hooks/useLibros'
import { ToastContainer } from 'react-toastify'

interface IProps {
  e: ILibro
  toggleModal: () => void
  setType: React.Dispatch<React.SetStateAction<string>>
  setSelectedData: React.Dispatch<React.SetStateAction<any>>
}

export const TemplateLibro = ({
  e,
  toggleModal,
  setType,
  setSelectedData,
}: IProps) => {
  const { eliminarLibro } = useLibros()
  return (
    <tr className="h-14 border-b border-black border-opacity-10">
      <td className="px-5">{e.isbn}</td>
      <td className="px-10">{e.idEditorial}</td>
      <td className="px-8">{e.titulo}</td>
      <td className="px-5">{e.autor}</td>
      <td className="px-5">{e.edicion}</td>
      <td className="px-8">{e.categoria}</td>
      <td className="px-10">{e.precio}.00</td>
      <td className="mt-3 flex space-x-4">
        <PencilIcon
          onClick={() => {
            toggleModal()
            setType('editar')
            setSelectedData(e)
          }}
          className="w-6 cursor-pointer"
        />
        <TrashIcon
          onClick={() => eliminarLibro(e.isbn)}
          className="w-6 cursor-pointer"
        />
      </td>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </tr>
  )
}
