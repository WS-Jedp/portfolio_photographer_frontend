import React from 'react'
import { ContentImageWrapper } from './styles'

interface ContentImageProps {
    Picture: React.ReactNode;
}

export const ContentImage:React.FC<ContentImageProps> = ({ children, Picture }) => {

    return (
        <ContentImageWrapper>
            <div className="content-image__picture">
                { Picture }
            </div>
            <div className="content-image__children">
                { children }
            </div>
        </ContentImageWrapper>
    )
}