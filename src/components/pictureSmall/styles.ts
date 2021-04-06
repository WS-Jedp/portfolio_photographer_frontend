import styled, { StyleSheetManagerProps } from 'styled-components'

interface PictureSmall extends StyleSheetManagerProps {
    position: 'left' | 'right';
    color: 'black' | 'white';
}

export const PictureSmallWrapper = styled.figure`
    box-sizing: border-box;
    position: relative;
    width: auto;
    height: auto;
    max-heihgt: 210px;
    display: flex;
    flex-flow: ${(props:PictureSmall) => props.position === 'left' ? 'row-reverse' : 'row'} nowrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    overflow: hidden;
    
    & img {
        width: 150px;
        height: 210px;
        object-fit: cover;
        left: 0;
        top: 0;
        box-shadow: 0 0 9px 6px rgba(0,0,0,.2);
        margin: 0 1rem 0 1rem;

        @media (min-width: 720px) {
            width: 180px;
            margin: 0 1.5rem 0 1.rem;
        }
    }

    & h3 {
        font-size: 1.2rem;
        color: var(--color-${(props:PictureSmall) => props.color});
    }
`