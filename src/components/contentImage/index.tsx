import React from 'react'
import { ContentImageWrapper } from './styles'

interface ContentImageProps {
    Picture: React.ReactNode;
    position?: 'left' | 'rigth';
}

export const ContentImage:React.FC<ContentImageProps> = ({ children, Picture, position = "left"}) => {

    return (
        <ContentImageWrapper position={position}>
            <div className="content-image__picture">
                { Picture }
            </div>
            <div className="content-image__children">
                { children }
            </div>
        </ContentImageWrapper>
    )
}