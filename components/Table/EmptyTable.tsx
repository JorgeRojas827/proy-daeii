import { EmojiSadIcon } from '@heroicons/react/outline'
import React from 'react'

export const EmptyTable = () => {
  return (
    <div className="grid h-[500px] w-[1124px] place-content-center text-[#868686]">
      <div className="flex flex-col items-center justify-center">
        <EmojiSadIcon className="ml-1 w-20 stroke-1" />
        <p className="font-medium ">No hay registros</p>
      </div>
    </div>
  )
}
