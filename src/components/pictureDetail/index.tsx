import React from 'react'
import { PictureDetailWrapper } from './styles'

interface PictureDetailProps {
    picture: string;
    title: string;
    location?: string;
    date?: string;
    detailed?: boolean;
}

export const PictureDetail:React.FC<PictureDetailProps> = ({ picture, title, date, location, detailed = false }) => {

    const alternative = title + (location && "," + location) + (date && "," + date)

    return (
        <PictureDetailWrapper detailed={detailed} className="picture-detail">
            <div className="picture-detail__title">
                <h2> {title} </h2>
            </div>
            <figure className="picture-detail__picture">
                <img src={picture} alt={alternative}/>
            </figure>
            <div className="picture-detail__data">
                {
                    location && <h4>{location}</h4>
                }
                {
                    date && <h4>{date}</h4>
                }
            </div>
        </PictureDetailWrapper>
    )
}