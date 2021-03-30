import React from 'react'
import { Link } from 'react-router-dom'
import { PortraitCollectionWrapper } from './styles'

interface PortraitCollectionProps {
    date: string;
    title: string;
    description?: string;
    image: string;
}

export const PortraitCollection:React.FC<PortraitCollectionProps> = ({ date, title, description, image }) => {
    
    return (
        <PortraitCollectionWrapper>
            <div className="portrait-collection">

                <span className="portrait-collection__date">
                    {
                        date
                    }
                </span>
                
                <div className="portrait-collection__text">
                    <h3>
                        {
                            title
                        }
                    </h3>
                    {
                        description && (
                            <p>
                                { description }
                            </p>
                        )
                    }
                </div>

                <div className="portrait-collection__button">
                    <Link to="/">
                        See More
                    </Link>
                </div>
            </div>

            <img src={image} /> 
        </PortraitCollectionWrapper>
    )
}