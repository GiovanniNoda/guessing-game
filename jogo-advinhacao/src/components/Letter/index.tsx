import { LetterContainer } from "./styles"

type Props = {
    value?: string
}

export function Letter({ value = "" }: Props) {
//significa que o valor padrão caso não exista é uma string vazia
    return(
        <LetterContainer>
            <span>{value}</span>
        </LetterContainer>
    )
}