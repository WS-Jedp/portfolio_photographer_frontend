import React from 'react'
import { TitleContainer } from './styles'

interface Title extends React.FC {
  up?: string,
  down?: string,
  position?: 'left' | 'right' | 'center',
  color?: 'white' | 'black' 
}

export const Title:React.FC<Title> = (props) =>{

  const { up, down, position = 'center', color = 'black' } = props

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