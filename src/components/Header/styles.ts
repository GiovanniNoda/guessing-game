import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    > img {
        height: 3.75rem;
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 3.25rem 0;

        > span {
            font-size: 1.12rem;
            color: ${props => props.theme['gray-400']};

            > strong {
                font-size: 1.37rem;
                color: ${props => props.theme['orange-200']};
            }
        }

        > button {
            background: transparent;
            border: none;

            > img {
                height: 2rem;
                transition: scale 0.5s;
            }

            > img:hover {
                scale: 1.3;
            }
        }
    }
`