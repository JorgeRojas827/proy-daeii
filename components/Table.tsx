import React, { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks'
import { useState } from 'react'
import { useSection } from '../hooks/useSection'
import { firstLetterUppercase } from '../helpers/functions'
import {
  PencilAltIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
} from '@heroicons/react/outline'

export const Table = () => {
  const { section } = useSection()
  const [fields, setFields] = useState<string[]>([])
  const [data, setData] = useState([])

  useEffect(() => {}, [])

  return (
    <table className="w-full table-auto">
      <thead className="w-full border-b border-black border-opacity-10">
        <tr className="h-14">
          <th>Id</th>
          <th>Email</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="text-[#868686]">
        <tr className="border-b border-black border-opacity-10">
          <td>1</td>
          <td className="grid place-content-center">
            jorgerojaspoma09@gmail.com
          </td>
          <td>Jorge Rojas</td>
          <td>99999999</td>
          <td>Ca. Ejemplo 102</td>
          <td className="flex">
            <PencilIcon className="w-6 cursor-pointer" />
            <TrashIcon className="w-6 cursor-pointer" />
          </td>
        </tr>
        <tr className="border-b border-black border-opacity-10">
          <td>1</td>
          <td className="grid place-content-center">
            jorgerojaspoma09@gmail.com
          </td>
          <td>Jorge Rojas</td>
          <td>99999999</td>
          <td>Ca. Ejemplo 102</td>
          <td className="flex">
            <PencilIcon className="w-6 cursor-pointer" />
            <TrashIcon className="w-6 cursor-pointer" />
          </td>
        </tr>
        <tr className="border-b border-black border-opacity-10">
          <td>1</td>
          <td className="grid place-content-center">
            jorgerojaspoma09@gmail.com
          </td>
          <td>Jorge Rojas</td>
          <td>99999999</td>
          <td>Ca. Ejemplo 102</td>
          <td className="flex">
            <PencilIcon className="w-6 cursor-pointer" />
            <TrashIcon className="w-6 cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
