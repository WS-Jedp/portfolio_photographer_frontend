import styled, { StyleSheetManagerProps } from 'styled-components'

interface FeaturedCollectionProps extends StyleSheetManagerProps {
  position: 'left' | 'right'
}



export const FeaturedCollectionWrapper = styled.article`
  box-sizing: border-box;
  position: relative;
  width: 70%;
  height: 510px;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 720px) {
    max-width: 330px;
  }

  &:hover {
    .featured-collection__image {
      filter: blur(.2px);
    }

    .featured-collection__image img {
      transform: scale(1.2);
    }
  }

  & .featured-collection__image {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: blur(3px);
    z-index: 98;
    transition: .6s ease-in-out;


    & img {
      transition: .6s ease-in-out;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .featured-collection__text {
    box-sizing: border-box;
    padding: 1.5em;
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
    align-items: ${(props:FeaturedCollectionProps) => props.position === 'left' ? 'flex-start' : 'flex-end' };
    text-align: ${(props:FeaturedCollectionProps) => props.position };
    color: var(--color-white);
    z-index: 99;

    & h2 {
      font-size: 21px;
      font-style: italic;

      @media(min-width: 720px) {
        font-size: 30px;
      }
    }

    & p {
      font-size: 21px;
      font-style: italic;
    }
  }

  & .featured-collection__button {
    position: absolute;
    bottom: 1.5em;
  }

`