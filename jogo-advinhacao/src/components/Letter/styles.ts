import styled from "styled-components"

export const LetterContainer = styled.div`
    width: 3.37rem;
    height: 3.37rem;
    border-radius: 0.62rem;

    background-color: ${props => props.theme['blue-100']};
    color: ${props => props.theme['blue-200']};

    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    
`