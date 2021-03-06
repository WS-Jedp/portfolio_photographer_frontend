import styled from 'styled-components'

export const PortraitCollectionSmallWrapper = styled.figure`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    min-width: 180px;
    width: 100%;
    max-width: 200px;
    height: 300px;
    align-items: center;
    justify-content: space-between;
    transition: .3s ease-in-out;
    cursor: pointer;

    @media (min-width: 720px) {
        min-width: 200px;
        height: 270px;
    }

    & .portrait-collection {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        transition: .3s ease-in-out;
    }

    & .portrait-collection__date {
        color: var(--color-white);
        z-index: 99;
        font-size: 1.2rem;
    }

    & .portrait-collection__text {
        display: flex;
        flex-flow: column nowrap;
        place-items: center;
        text-align: center;
        color: var(--color-white);
        font-size: 1.5rem;
        z-index: 99;

        & h3 {
            font-size: 1.5rem;
        }
        & p {
            font-size: 1.2rem;
        }
            
    }

    & .portrait-collection__button {
        display: flex;
        width: 90%;
        flex-flow: column nowrap;
        place-items: center;
        text-align: center;
        color: var(--color-white);
        font-size: 1.8rem;
        z-index: 99;
        padding: .2rem;
        border: 1px solid var(--color-white);

        & a {
            color: var(--color-white);
            font-size: 1.2rem;
        }
        
    }

    & .portrait-collection__text, .portrait-collection__date, .portrait-collection__button {
        transition: .6s ease-in-out;
        opacity: 0;
    }

    & img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    &:hover {
        max-width: 210px; 
        .portrait-collection__date, .portrait-collection__text, .portrait-collection__button  {
            opacity: 1;
        }
    }

`