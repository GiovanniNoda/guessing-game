import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;

        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    body, input, button {
        font-family: 'Noto Sans', sans-serif;
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover {
        filter: brightness(0.9);
    }
    `

