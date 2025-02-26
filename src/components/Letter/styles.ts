import styled from "styled-components"

export const LetterContainer = styled.div<{ size?: "default" | "small" , color?: "default" | "correct" | "wrong"}>`
    width: ${props => (props.size === "small" ? "2.75rem" : "3.37rem")};
    height: ${props => (props.size === "small" ? "2.75rem" : "3.37rem")};
    border-radius: ${props => (props.size === "small" ? "0.43rem" : "0.62rem")};

    background-color: ${props =>
        props.color === "correct" ? props.theme['green-100'] :
        props.color === "wrong" ? props.theme['orange-100'] : props.theme['blue-100']};


    color: ${props =>
        props.color === "correct" ? props.theme['green-200'] :
        props.color === "wrong" ? props.theme['orange-300'] : props.theme['blue-200']};

    border-color: ${props =>
        props.color === "correct" ? props.theme['green-200'] :
        props.color === "wrong" ? props.theme['orange-300'] : props.theme['blue-200']};

    text-transform: uppercase;
    font-size: ${props => (props.size === "small" ? "1.25rem" : "2rem")};
    font-weight: ${props => (props.size === "small" ? "600" : "700")};
    border: ${props => (props.size === "small" ? `1px solid` : "none")};

    display: flex;
    align-items: center;
    justify-content: center;
`
