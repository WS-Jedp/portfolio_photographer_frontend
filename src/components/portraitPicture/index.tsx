import React from 'react'
import { PortraitPictureWrapper } from './styles'

interface PortraitPictureProps {
    picture: string;
    position?: 'left' | 'right';
    title: string;
}

export const PortraitPicture:React.FC<PortraitPictureProps> = ({ picture, title, position = 'left' }) => {

    return (
        <PortraitPictureWrapper position={position} >
            <img src={picture} />
            <span>
                { title }
            </span>
        </PortraitPictureWrapper>
    )
}