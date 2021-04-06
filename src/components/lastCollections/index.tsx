import React from 'react'
import { LastCollectionWrapper } from './styles'

import { PortraitCollectionSmall } from '../portraitCollectionSm'

type collection = {
    date: string;
    title: string;
    description?: string;
    image: string;
}

interface LastCollectionsProps {
    collections: collection[];
    columns?: boolean;
}

export const LastCollections:React.FC<LastCollectionsProps> = ({ collections, columns=false }) => {

    return (
        <LastCollectionWrapper columns={columns}>
            {
                collections.map((el, i) => (
                    <PortraitCollectionSmall key={i} date={el.date} image={el.image} title={el.date} description={el.description} /> 
                ))
            }
        </LastCollectionWrapper>
    )
}