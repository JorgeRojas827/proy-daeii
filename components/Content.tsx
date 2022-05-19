import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { Button } from '../components/Button'
import { Table } from '../components/Table'
import { useSection } from '../hooks/useSection'
import { firstLetterUppercase, removeLastLetter } from '../helpers/functions'
import { NuevoModal } from '../components/NuevoModal'
import { useModal } from '../hooks/useModal'

export const Content = () => {
  const { section } = useSection()
  const { modal, toggleModal } = useModal()

  return (
    <div className=" grid w-10/12 place-content-center rounded-2xl bg-[#F7F7F7] font-montserrat">
      <div className="relative flex h-[660px] w-[1124px] flex-col rounded-2xl border border-[#D8D8D8] bg-white">
        <div className="flex items-center justify-between px-12 py-5">
          <h1 className="text-3xl font-semibold">
            {firstLetterUppercase(section)}
          </h1>
          <div onClick={toggleModal}>
            <Button
              Icon={PlusIcon}
              title={`Añadir ${removeLastLetter(section)}`}
            />
          </div>
        </div>
        <div className="mb-5 w-full border-t border-[#D8D8D8]"></div>
        <div className="grid w-full place-content-center px-5">
          <Table />
        </div>
        <div className="absolute bottom-0 flex w-full items-center border-t border-[#D8D8D8] py-2 pl-10 text-sm font-medium text-[#929292]">
          <p>5 {firstLetterUppercase(section)}</p>
        </div>
      </div>
      {modal && (
        <NuevoModal
          title={`${
            section.substring(section.length - 2) == 'as' ? 'Nueva' : 'Nuevo'
          } ${removeLastLetter(section)}`}
          closable={toggleModal}
        />
      )}
    </div>
  )
}
