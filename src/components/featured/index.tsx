import React from 'react'
import { FeaturedWrapper } from './styles'

interface FeaturedProps {
  title?: string,
  location: string,
  albumName?: string,
  photoName?: string 
  url: string
}

export const Featured:React.FC<FeaturedProps> = ({albumName, photoName, location, url, title = 'featured'}) => {

  return (
    <FeaturedWrapper>
      <h3>{title}</h3>
      <div className="featured-image">
        <img alt={location} src={url}></img>
        <div className="featured-image__text">
          <p>
            {location}
          </p>
          <span>
            { albumName ? albumName : photoName }
          </span>
        </div>
      </div>
    </FeaturedWrapper>
  )

}