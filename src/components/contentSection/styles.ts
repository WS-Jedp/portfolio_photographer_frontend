import styled, { StyleSheetManagerProps } from 'styled-components'

interface ContentSectionWrapperProps extends StyleSheetManagerProps{
    reverse: boolean;
}

export const ContentSectionWrapper = styled.section`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 4rem;

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