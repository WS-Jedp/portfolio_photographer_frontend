import styled from 'styled-components'

export const LayoutWrapper = styled.section`
    box-sizing: border-box;
    position: relative;
    display: grid;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-template-columns: .1fr auto;

    .layout-content {
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        width: 100%;
        height: auto;
        overflow-y: scroll;
    }
`