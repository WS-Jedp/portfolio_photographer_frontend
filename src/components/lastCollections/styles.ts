import styled, { StyleSheetManagerProps } from 'styled-components'

interface LastCollectionWrapperProps extends StyleSheetManagerProps {
    columns: boolean;
} 

export const LastCollectionWrapper = styled.article`
    position: relative;
    display: grid;
    grid-template-${(props:LastCollectionWrapperProps) => props.columns ? 'columns' : 'row'}: repeat(3, 1fr);
    grid-gap: 2rem;
    width: 100%;
    height: auto;
    justify-content: space-around;
`