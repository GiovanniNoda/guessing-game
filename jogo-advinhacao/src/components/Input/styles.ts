import styled from "styled-components"

export const InputContainer = styled.input`
    width: 2.87rem;
    height: 2.87rem;
    border-radius: 0.43rem;

    background-color: ${props => props.theme['blue-100']};
    color: ${props => props.theme['blue-200']};
    border: 2px solid ${props => props.theme['blue-200']};

    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;

    outline: none;
`