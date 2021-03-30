import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body, #root, .App {
        width: 100%;
        height: 100%;
        font-family: sans-serif;
    }
    textarea:focus, input:focus, button:focus{
        outline: none;
    }
`

export default GlobalStyle;