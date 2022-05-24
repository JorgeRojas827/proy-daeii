import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { firstLetterUppercase } from '../helpers/functions'
import { useState } from 'react'

interface IProps {
  name: string
  register: UseFormRegister<FieldValues>
  type: string
  value?: string
  readonly?: boolean
}

export const Input = ({
  name,
  register,
  type,
  value,
  readonly = false,
}: IProps) => {
  const [text, setText] = useState(value)
  return (
    <input
      {...register(name)}
      className={`rounded-md py-2 px-5 outline-none ${
        readonly == true && 'bg-slate-100'
      } drop-shadow-input placeholder:opacity-70`}
      type={type}
      onChange={(e) => setText(e.target.value)}
      required
      value={text}
      autoComplete="none"
      readOnly={readonly}
      placeholder={firstLetterUppercase(name)}
    />
  )
}
