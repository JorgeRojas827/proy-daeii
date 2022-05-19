import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { setSection } from '../redux/slices/CurrentSectionSlice'
import { useSection } from '../hooks/useSection'

interface IProps {
  text: string
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  extraClass?: string
}

export const LeftBarItem = ({ Icon, text, extraClass }: IProps) => {
  const { setCurrentSection, section } = useSection()

  return (
    <div
      onClick={() => setCurrentSection(text)}
      className={`flex cursor-pointer items-center space-x-3 rounded-lg py-3 pl-4 pr-16 font-montserrat ${extraClass}`}
      style={
        section === text.toLowerCase()
          ? {
              backgroundColor: '#272727',
              color: 'white',
            }
          : {
              backgroundColor: 'transparent',
              color: '#868686',
            }
      }
    >
      <Icon className="h-6 w-6" />
      <h6 className="font-medium">{text}</h6>
    </div>
  )
}
