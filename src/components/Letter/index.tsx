import { LetterContainer } from "./styles"

type Props = {
    value?: string
    size?: "default" | "small"
    color?: "default" | "correct" | "wrong"
}

export function Letter({ value = "", size = "default", color = "default" }: Props) {
//significa que o valor padrão caso não exista é uma string vazia
    return(
        <LetterContainer size={size} color={color} >
            <span>{value}</span>
        </LetterContainer>
    )
}