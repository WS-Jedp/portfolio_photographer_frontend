import styled, {} from 'styled-components'

export const CoverCollectionWrapper = styled.article`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-flow: column;
    padding: 2rem;

    @media (min-width: 720px) {
        height: 69vh;
    } 

    & .cover-collection {
        position: relative;
        width: 100%;
        height: 100%;

        &__title {
            display: flex;
            flex-flow: column nowrap;
            place-items: flex-end center;
            z-index: 99;

            & p {
                color: var(--color-white);
            }
        }

        &__date {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            z-index: 99;
            color: var(--color-white);
        }

        
    }

    @media (min-width: 720px) {
        & .cover-collection__title p, .cover-collection__date {
            font-size: 24px;
        }
    }

    & figure {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
        z-index: 0;

        & img {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`