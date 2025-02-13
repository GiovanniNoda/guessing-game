import { LettersUsedContainer } from "./styles"
import { Letter } from "../Letter"

export type LetterUsedProps = {
    value: string
    correct: boolean
}

type Props = {
    data: LetterUsedProps[]
}

export function LettersUsed({ data }: Props) {
    return(
        <LettersUsedContainer>
            <h5>Letras utilizadas</h5>

            <div>
                {
                    data.map(({ value, correct }) => (
                        <Letter key={value} value={value} size="small" color={correct ? "correct" : "wrong"} />
                    ))
                }
                
            </div>
        </LettersUsedContainer>
    )
}