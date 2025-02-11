import styled from "styled-components"

export const ButtonContainer = styled.button`
    height: 2.87rem;
    border-radius: 0.43rem;

    background-color: ${props => props.theme['blue-200']};
    border: 2px solid ${props => props.theme['blue-300']};
    color: ${props => props.theme['blue-100']};

    padding: 0 0.87rem;
    font-size: 1rem;
    font-weight: 700;
`