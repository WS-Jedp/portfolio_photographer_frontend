import styled, { StyleSheetManagerProps } from 'styled-components'

interface ContentImageWrapperProps extends StyleSheetManagerProps {
    position: 'left' | 'rigth';
}

export const ContentImageWrapper = styled.article`
    position: relative;
    display: flex;
    flex-flow: column nowrap;

    & .content-image__children {
        align-self: ${(props:ContentImageWrapperProps) => props.position === 'rigth' ? 'flex-end' : 'flex-start'};
    }
`