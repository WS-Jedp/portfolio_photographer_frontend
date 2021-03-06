import styled, { StyleSheetManagerProps } from 'styled-components'

interface ContentSectionWrapperProps extends StyleSheetManagerProps{
    reverse: boolean;
    bgColor: 'black' | 'white';
}

export const ContentSectionWrapper = styled.section`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 4rem;
    padding: 1rem;

    @media (min-width: 720px) {
        padding: 2rem;
    }

    @media (min-width: 720px) {
        margin-bottom: 8rem;
    }

    background-color: var(--color-${(props:ContentSectionWrapperProps) => props.bgColor});

    color: var(--color-${(props:ContentSectionWrapperProps) => props.bgColor == 'black' ? 'white' : 'black'});

    @media (min-width: 720px) {
        flex-flow: ${(props:ContentSectionWrapperProps) => props.reverse ? 'row-reverse' : 'row'}
    }

    .content-section {
        &__main {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
        }
        &__secondary {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
        }
    }
` 