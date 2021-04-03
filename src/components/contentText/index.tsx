import React from 'react'
import { ContentTextWrapper } from './styles'

import { Title } from '../title'
import { Paragraph } from '../paragraph'

interface ContentTextProps {
    upTitle?: string;
    downTitle?: string;
    position?: 'left' | 'right' | 'center',
    text: string;
    color?: 'white' | 'black';
}

export const ContentText:React.FC<ContentTextProps> = ({ upTitle, text, downTitle, position = "left", color = "black", children }) => {

    return (
        <ContentTextWrapper>
            <Title 
                up={upTitle}
                down={downTitle}
                position={position}
                color={color}
            />
            <Paragraph 
                position={position}
                color={color}
                children={text}
            />
            <div className="content-text__children">
                {
                    children
                }
            </div>

        </ContentTextWrapper>
    )
}