import styled, {StyleSheetManagerProps} from 'styled-components'

interface ParagraphProps extends StyleSheetManagerProps{
  position?: 'left' | 'center' | 'right';
  color: 'white' | 'black';
}

export const ParagraphWrapper = styled.p`
  font-weight: 300;
  font-style: italic;
  font-size: 30px;
  color: ${(props:ParagraphProps) => (`var(--color-${props.color})`)};
  text-align: ${(props:ParagraphProps) => (props.position)};

  @media (min-width: 720px) {
    font-size: 42px;
  }
`