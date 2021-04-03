import React from 'react'
import { TitleContainer } from './styles'

interface TitleProps {
  up: string,
  down: string,
  position?: 'left' | 'right' | 'center',
  color?: 'white' | 'black' 
}

export const Title:React.FC<TitleProps> = ({up, down, position, color = "black"}) => {

  return (
    <TitleContainer position={position} color={color}>
      {
        up && <h1>{up}</h1>
      } 
      {
        down && <h2>{down}</h2>
      }
    </TitleContainer>
  )
}