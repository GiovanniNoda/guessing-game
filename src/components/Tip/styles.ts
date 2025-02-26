import styled from "styled-components"

export const TipContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme['blue-100']};
    color: ${props => props.theme['blue-300']};

    border-radius: 0.62rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
        height: 2rem;
    }

    > div > h3 {
        font-size: 1.25rem;
        font-weight: 700;
    }

    > div > p {
        font-size: 1rem;
        margin-top: 0.31rem;
    }
`