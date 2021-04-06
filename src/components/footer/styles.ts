import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    position: relative;
    width: 100%;

    & section {
        margin: 0 !important;
    }
`

export const SocialMediaWrapper = styled.div`
    width: auto;
    display: flex;
    flex-flow: column nowrap;
    
    & .media {
        display: flex;
        flex-flow: row nowrap;
        font-size: 1rem;
        
        @media (min-width: 720px) {
            font-size: 1.5rem;
        }
    }

    & .email {
        color: var(--color-white);
        font-size: 1rem;
        font-style: italic;
        @media (min-width: 720px) {
            font-size: 1.5rem;
        }
    }
`