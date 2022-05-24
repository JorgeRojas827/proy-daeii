import React, { Fragment, useEffect } from 'react'
import { useSection } from '../../hooks/useSection'
import {
  firstLetterUppercase,
  mapObject,
  removeLastLetter,
} from '../../helpers/functions'
import { EmptyTable } from './EmptyTable'
import { TemplateLibro } from './TemplateLibro'
import { useTable } from '../../hooks/useTable'
import { TemplateUser } from './TemplateUser'
import { EditModal } from '../EditModal'
import { useModal } from '../../hooks/useModal'

interface IProps {
  data: any[]
  fields: string[]
  fetchData: () => void
  toggleModal: () => void
  setType: React.Dispatch<React.SetStateAction<string>>
  setSelectedData: React.Dispatch<React.SetStateAction<any>>
}

export const Table = ({
  data,
  fields,
  fetchData,
  toggleModal,
  setType,
  setSelectedData,
}: IProps) => {
  const { section } = useSection()

  useEffect(() => {
    fetchData()
  }, [section])

  const renderData = () => {
    return data.map((e, i) => {
      if (e.titulo) {
        return (
          <TemplateLibro
            setSelectedData={setSelectedData}
            toggleModal={toggleModal}
            setType={setType}
            e={e}
            key={i}
          />
        )
      } else if (e.usuario) {
        return (
          <TemplateUser
            setSelectedData={setSelectedData}
            toggleModal={toggleModal}
            setType={setType}
            e={e}
            key={i}
          />
        )
      }
    })
  }

  return (
    <Fragment>
      {data.length > 0 ? (
        <Fragment>
          <table className="w-full table-auto">
            <thead className="w-full border-b border-black border-opacity-10">
              <tr className="h-14">
                {fields.map((e, i) => {
                  return <th key={i}>{e}</th>
                })}
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="text-[#868686]">{renderData()}</tbody>
          </table>
          <div className="absolute bottom-0 left-0 flex w-full items-center border-t border-[#D8D8D8] py-2 pl-10 text-sm font-medium text-[#929292]">
            <p>
              {data.length} {firstLetterUppercase(section)}
            </p>
          </div>
        </Fragment>
      ) : (
        <EmptyTable />
      )}
    </Fragment>
  )
}
