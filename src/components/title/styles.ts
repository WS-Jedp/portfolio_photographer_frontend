import styled, { StyleSheetManagerProps } from 'styled-components'

interface PropsTitle extends StyleSheetManagerProps {
  position: 'left' | 'center' | 'right',
  color: 'white' | 'black'
}

export const TitleContainer = styled.div`
  text-align: ${(props:PropsTitle) => props.position};
  color: var(--color-black);

  h1 {
    font-weight: 100;
    font-style: italic;
    font-size: 54px;
    margin-bottom: -10px;
    color: ${(props:PropsTitle) => (`var(--color-${props.color})`)};
  }

  h2 {
    font-size: 63px;
    font-style: italic;
    color: ${(props:PropsTitle) => (`var(--color-${props.color})`)};
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 100px;
      margin-bottom: -30px;
    }
  
    h2 {
      font-size: 130px;
    }
  }
`