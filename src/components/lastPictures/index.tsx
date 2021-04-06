import React from 'react'
import { LastPicturesWrapper } from './styles'
import { PictureSmall } from '../pictureSmall'

type LastPicturesData = {
    image: string;
    title: string;
    position?: 'left' | 'right'; 
}

interface LastPicturesProps {
    images: LastPicturesData[]; 
    color?: 'black' | 'white';
}

export const LastPictures:React.FC<LastPicturesProps> = ({ images, color = "black" }) => {

    return (
        <LastPicturesWrapper>
            {
                images.map((img, i) => (
                    <PictureSmall image={img.image} title={img.title} color={color} key={i} position={img.position} />
                ))
            }
        </LastPicturesWrapper>
    )
}