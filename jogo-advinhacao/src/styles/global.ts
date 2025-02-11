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

    main {
        width: 556px;
        background-color: ${props => props.theme['white']};
        padding: 2rem;
        padding-top: 4.5rem;
        border-radius: 0.75rem;
    }

    main .word {
        width: 100%;

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 1rem;

        margin: 2.5rem 0;
    }
    `

