import React from 'react'

import { LeftBarItem } from '../components/LeftBarItem'
import {
  UserIcon,
  ArchiveIcon,
  BookOpenIcon,
  LogoutIcon,
} from '@heroicons/react/outline'

export const LeftBar = () => {
  return (
    <div className="relative flex h-full w-2/12 flex-col items-center bg-[#151515] py-8">
      <div className="flex items-center justify-center space-x-4">
        <figure className="w-12 rounded-lg bg-white px-1">
          <img src="assets/logo.png" alt="logo" />
        </figure>
        <h1 className="font-semibold text-[#FDFDFD]">Librioteca</h1>
      </div>
      <div className="my-5 w-full border-t border-[#F9F9F9] border-opacity-10"></div>
      <div className="flex flex-col justify-between space-y-6">
        <LeftBarItem Icon={ArchiveIcon} text="Reservas" />
        <LeftBarItem Icon={BookOpenIcon} text="Libros" />
        <LeftBarItem Icon={UserIcon} text="Lectores" />
      </div>
      <div className="absolute bottom-10 mx-auto">
        <div className="flex cursor-pointer items-center space-x-3 rounded-lg py-2 font-montserrat text-[#868686]">
          <LogoutIcon className="h-6 w-6" />
          <h6 className="font-semibold ">Cerrar Sesión</h6>
        </div>
      </div>
    </div>
  )
}
