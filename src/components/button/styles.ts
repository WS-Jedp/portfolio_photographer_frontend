import styled, { StyleSheetManagerProps } from 'styled-components'

interface ButtonProps extends StyleSheetManagerProps {
  color: "black" | "white"
}

export const ButtonWrapper = styled.div`

  position: relative;

  & a {
    transition: .3s ease-in-out;
    font-style: italic;
    font-size: 24px;
    color: var(--color-${(props:ButtonProps) => props.color});

    @media (min-width: 720px) {
      font-size: 30px;
    }
  }

  & svg {
    transition: .3s ease-in-out;
    position: absolute;
    top: -50%;
    width: 90px;
    height: 90px;
    color: var(--color-${(props:ButtonProps) => props.color});
    opacity: .2;
    z-index: -1;

    @media (min-width: 720px) {
      top: -70%;
      width: 120px;
      height: 120px;
    }
  }

`