import React from 'react'
import { ParagraphWrapper } from './styles'

interface ParagraphProps {
  position?: 'left' | 'center' | 'right';
  color?: 'black' | 'white';
}

export const Paragraph:React.FC<ParagraphProps> = ({color = 'black', position = 'center', children}) => (
  <ParagraphWrapper position={position} color={color}>
    {
      children
    }
  </ParagraphWrapper>
)