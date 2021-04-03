import styled, { StyleSheetManager } from 'styled-components'

interface MenuWrapperProps extends StyleSheetManager {
    isOpen: boolean;
    color: 'white' | 'black';
}

export const MenuWrapper = styled.menu`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: ${(props:MenuWrapperProps) => props.isOpen === true ? 'end' : 'center'};
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    max-width: ${(props:MenuWrapperProps) => props.isOpen === true ? '60vw' : '60px'};
    background-color: var(--color-${(props:MenuWrapperProps) => props.color});
    color: var(--color-${(props:MenuWrapperProps) => props.color === 'black' ? 'white' : 'black'});
    text-align: center;
    box-shadow: 2px 0 12px 3px rgba(0,0,0,.2);
    writing-mode: vertical-rl;
    padding: 1rem;
    transition: .6s ease-in-out;

    @media (min-width:720px) {
        max-width: ${(props:MenuWrapperProps) => props.isOpen === true ? '60vw' : '72px'};
    }

    .menu {
        transition: .6s ease-in-out;
        &__button {
            cursor: pointer;
        }

        &--open {
            position: absolute;
            opacity: 1;
            left: 0;
            writing-mode: horizontal-tb;
            transition: .6s ease-in-out;

            & ul li {
                font-size: 21px;
                margin: 1rem;
            }
        }

        &--close {
            position: absolute;
            opacity: 0;
            left: -100%;
            transition: .6s ease-in-out;

        }
    }
`