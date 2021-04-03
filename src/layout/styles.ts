import styled from 'styled-components'

export const LayoutWrapper = styled.section`
    box-sizing: border-box;
    position: relative;
    display: grid;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-template-columns: .1fr .9fr;

    .layout-content {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height: auto;
        overflow: scroll-y;
    }
`