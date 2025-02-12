import styled from "styled-components"

export const LettersUsedContainer = styled.div`
    width: 100%;
    margin-top: 3.25rem;
    border-top: 1px solid ${props => props.theme['gray-200']};

    > h5 {
        color: ${props => props.theme['blue-400']};
        font-size: 1rem;
        font-weight: 600;
        margin: 0.75rem 0;
    }

    > div {
        display: flex;
        gap: 0.75rem;
        flex-flow: row wrap;
    }
`