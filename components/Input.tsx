import React from 'react'

interface IProps {
  name: string
}

export const Input = ({ name }: IProps) => {
  return (
    <input
      className="rounded-md py-2 px-5 outline-none drop-shadow-input placeholder:opacity-70"
      type="text"
      placeholder={name}
    />
  )
}
