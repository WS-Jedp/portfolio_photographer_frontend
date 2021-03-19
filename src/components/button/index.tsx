import React from 'react'
import { Link } from 'react-router-dom' 
import { ButtonWrapper } from './styles'
import { IconType } from 'react-icons'

interface ButtonProps {
  title: string,
  Icon?: IconType,
  to: string,
  color?: "white" | "black"
}

export const Button:React.FC<ButtonProps> = ({title, Icon, to, color="black"}) => {

  return (
    <ButtonWrapper color={color}>
      <Link to={to}>
        {
          Icon && <Icon />
        }
        {
          title
        }
      </Link>
    </ButtonWrapper>
  )
  
}