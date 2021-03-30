import styled, { StyleSheetManagerProps } from 'styled-components'

interface SelfPictureProps extends StyleSheetManagerProps {
    position?: 'left' | 'rigth';
}

export const SelfPictureWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    postiion: relative;
    min-width: 200px;
    width: 80%; 
    height: 510px;
    max-width: 300px;
    overflow: hidden;
    text-align: ${(props:SelfPictureProps) => props.position === 'left' ? 'start' : 'end'};

    @media (min-width: 720px) {
        height: 90vh;
    }

    & figure {
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: ${(props:SelfPictureProps) => props.position === 'left' ? 'flex-start' : 'flex-end'};
        width: 100%;
        height: 100%;
        padding: 1rem;

        & span {
            color: var(--color-white);
            z-index: 99;
        }
    }

    & figure img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & figcaption {
        padding-top: .5rem;
        color: var(--color-black);
    }
`