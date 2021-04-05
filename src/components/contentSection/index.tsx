import React from 'react'
import { ContentSectionWrapper } from './styles'

interface ContentSectionProps {
    main: React.ReactNode;
    secondary: React.ReactNode;
    reverse?: boolean;
    color?: 'black' | 'white';
}

export const ContentSection:React.FC<ContentSectionProps> = ({ main, secondary, color='white', reverse = false }) => {

    return (
        <ContentSectionWrapper reverse={reverse} bgColor={color}>
            <div className="content-section__main">
                {
                    main
                }
            </div>
            <div className="content-section__secondary">
                {
                    secondary
                }
            </div>
        </ContentSectionWrapper>
    )
}