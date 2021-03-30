import styled, { StyleSheetManagerProps } from 'styled-components'

interface PortraitPictureProps extends StyleSheetManagerProps{
    position?: 'left' | 'right';
}

export const PortraitPictureWrapper = styled.figure`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    width: 210px;
    height: 330px;
    justify-content: flex-end;
    text-align: ${(props:PortraitPictureProps) => props.position === 'left' ? 'start' : 'end'}; 
    align-items: ${(props:PortraitPictureProps) => props.position === 'left' ? 'flex-start' : 'flex-end'}; 
    overflow: hidden;
    padding: 1rem;
    box-shadow:  0 9px 18px rgba(0,0,0,.2);

    @media (min-width: 720px) {
        width: 210px;
        height: 260px;
    }

    & img {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    & span {
        z-index: 99;
        color: var(--color-white);        
    }
`