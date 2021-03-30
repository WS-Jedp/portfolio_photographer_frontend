import React from 'react'
import { SelfPictureWrapper } from './styles'

interface SelfPictureProps {
    picture: string;
    caption?: string;
    position?: 'left' | 'rigth';
    figCaption?: string;
}

export const SelfPicture:React.FC<SelfPictureProps> = ({ picture, caption, figCaption, position = 'left' }) => {

    return (
        <SelfPictureWrapper position={position}>
            <figure>
                <img src={picture} />
                {
                    caption && (
                        <span>
                            { caption }
                        </span>
                    )
                }
            </figure>
            {
                figCaption && (
                    <figcaption>
                        { figCaption }
                    </figcaption>
                )
            }
        </SelfPictureWrapper>
    )
}