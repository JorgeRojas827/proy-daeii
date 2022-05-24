import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { Button } from '../components/Button'
import { useSection } from '../hooks/useSection'
import {
  firstLetterUppercase,
  mapObject,
  removeLastLetter,
} from '../helpers/functions'
import { NuevoModal } from '../components/NuevoModal'
import { useModal } from '../hooks/useModal'
import { Table } from './Table/Table'
import { useTable } from '../hooks/useTable'
import { EditModal } from './EditModal'
import { useState } from 'react'

export const Content = () => {
  const { section } = useSection()
  const [type, setType] = useState('')
  const [selectedData, setSelectedData] = useState<any>()
  const { modal, toggleModal } = useModal()
  const { data, fields, fetchData } = useTable()

  return (
    <div className=" grid w-10/12 place-content-center rounded-2xl bg-[#F7F7F7] font-montserrat">
      <div className="relative flex h-[660px] w-[1124px] flex-col rounded-2xl border border-[#D8D8D8] bg-white">
        <div className="flex items-center justify-between px-12 py-5">
          <h1 className="text-3xl font-semibold">
            {firstLetterUppercase(section)}
          </h1>
          <div
            onClick={() => {
              setType('añadir')
              toggleModal()
            }}
          >
            <Button
              Icon={PlusIcon}
              title={`Añadir ${removeLastLetter(section)}`}
            />
          </div>
        </div>
        <div className="mb-5 w-full border-t border-[#D8D8D8]"></div>
        <div className="grid w-full place-content-center px-5">
          <Table
            toggleModal={toggleModal}
            setSelectedData={setSelectedData}
            setType={setType}
            data={data}
            fields={fields}
            fetchData={fetchData}
          />
        </div>
      </div>
      {modal && type === 'añadir' && (
        <NuevoModal
          data={mapObject(data[0])}
          title={`${
            section.substring(section.length - 2) == 'as' ? 'Nueva' : 'Nuevo'
          } ${removeLastLetter(section)}:`}
          closable={toggleModal}
        />
      )}
      {modal && type === 'editar' && (
        <EditModal
          data={selectedData}
          fields={Object.keys(data[0])}
          title={`${'Editar'} ${removeLastLetter(section)}:`}
          closable={toggleModal}
        />
      )}
    </div>
  )
}
