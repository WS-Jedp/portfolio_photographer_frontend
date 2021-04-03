import React from 'react'
import { CoverCollectionWrapper } from './styles'

import { Title } from '../title'
import { Paragraph } from '../paragraph'


interface CoverCollectionProps {
    upTitle: string;
    downTitle: string;
    description: string;
    picture: string;
    date?: string;
    position?: 'left' | 'center' | 'right';
}

export const CoverCollection:React.FC<CoverCollectionProps> = ({ upTitle, downTitle, description, picture, date, position = 'right' }) => {

    return (
        <CoverCollectionWrapper className="cover-collection">
            <figure className="cover-collection__picture">
                <img src={picture} alt={description} />
            </figure>

            <div className="cover-collection__title">
                <Title up={upTitle} down={downTitle} position="right" color="white" />
                <Paragraph color="white">
                    {
                        description
                    }
                </Paragraph>
            </div>

            <div className="cover-collection__date">
                {
                    date && (<span> {date} </span>)
                }
            </div>
        </CoverCollectionWrapper>
    )
}