import { XIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify'
import React, { Fragment } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Input } from './Input'
import { setDimensions } from '../helpers/functions'
import { useUsers } from '../hooks/useUsers'
import { IUserLogin } from '../interfaces/IUser'
import { useLibros } from '../hooks/useLibros'

interface IProps {
  title: string
  closable?: () => void
  fields?: any
  data: any
}

export const EditModal = ({ closable, title, fields, data }: IProps) => {
  const { register, handleSubmit } = useForm()
  const { editarUsuario } = useUsers()
  const { agregarLibro } = useLibros()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    if (data.usuario) {
      editarUsuario(data, data.idUsuario)
    } else if (data.isbn) {
      agregarLibro(data)
    }
    toast.success(title + ' creado', { position: 'bottom-right' })
  }

  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-screen cursor-default items-center justify-center bg-black bg-opacity-50">
      <div
        className={`${setDimensions(
          fields
        )} relative flex h-80 w-72 flex-col items-center justify-start rounded-lg bg-[#FBFBFB] py-4`}
      >
        <div id="head" className="ml-20 flex w-full flex-col">
          <h2 className="text-primary mt-3 cursor-text text-base font-semibold md:text-lg">
            {title}
          </h2>
          <div className="mt-1 w-32 border-b border-black opacity-10"></div>
        </div>
        <div id="content" className="w-full">
          <div onClick={closable}>
            <XIcon className="absolute right-10 top-8 h-5 w-5 cursor-pointer" />
          </div>
          <div id="form" className="mt-8 flex items-center justify-center">
            <form
              className="relative grid w-4/5 grid-cols-2 place-content-center gap-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              {fields.map((e: any, i: any) => {
                return (
                  <Fragment>
                    {
                      <Input
                        type="text"
                        name={e}
                        value={data[e]}
                        readonly={
                          e.substring(0, 2) === 'id' || (e === 'isbn' && true)
                        }
                        register={register}
                        key={i}
                      />
                    }
                  </Fragment>
                )
              })}

              <input
                className={`absolute -bottom-${
                  fields.length >= 6 ? '10' : '20'
                } right-0 mt-8 h-10 w-20 flex-none cursor-pointer rounded-lg bg-[#272727] p-1 px-4 font-semibold text-white`}
                type="submit"
                value="Editar"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}
