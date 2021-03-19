import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  :root {
    --color-black: #393A3E;
    --color-white: #F3F3F3;
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Cormorant Garamond', serif;
    background-color: var(--color-white);
  }
`