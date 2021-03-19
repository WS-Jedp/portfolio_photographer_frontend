import React from 'react'
import { FeaturedCollectionWrapper } from './styles'
import { Button } from '../button'

interface FeaturedCollection {
  url: string,
  name: string,
  description: string,
  to: string,
  position?: 'right' | 'left'
}

export const FeaturedCollection:React.FC<FeaturedCollection> = (props) => {
  const {
    url, name, description, to, position = 'left'
  } = props

  return (
    <FeaturedCollectionWrapper position={position}>
      <div className="featured-collection__image">
        <img src={url} alt={name} />
      </div>
      <div className="featured-collection__text">
        <h2> {name} </h2>
        <p>
          {
            description
          }
        </p>
        <div className="featured-collection__button">
          <Button title="Dive Into" to={to} color="white" />
        </div>
      </div>
    </FeaturedCollectionWrapper>
  )
}