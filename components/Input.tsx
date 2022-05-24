import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { firstLetterUppercase } from '../helpers/functions'

interface IProps {
  name: string
  register: UseFormRegister<FieldValues>
  type: string
}

export const Input = ({ name, register, type }: IProps) => {
  return (
    <input
      {...register(name)}
      className="rounded-md py-2 px-5 outline-none drop-shadow-input placeholder:opacity-70"
      type={type}
      required
      autoComplete="none"
      placeholder={firstLetterUppercase(name)}
    />
  )
}
