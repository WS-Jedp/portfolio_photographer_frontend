import React from 'react'
import { PictureSmallWrapper } from './styles'

interface PictureSmallProps {
    image: string;
    title: string;
    position?: 'left' | 'right';
    color?: 'black' | 'white';
}

export const PictureSmall:React.FC<PictureSmallProps> = ({ image, title, color = "black", position = "left" }) => {

    return (
        <PictureSmallWrapper color={color} position={position}>        
            <img src={image} alt={title}/>
            <h3>
                {
                    title
                }
            </h3>
        </PictureSmallWrapper>
    )
}