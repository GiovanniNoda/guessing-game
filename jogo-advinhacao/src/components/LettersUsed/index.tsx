import { LettersUsedContainer } from "./styles"
import { Letter } from "../Letter"

export function LettersUsed() {
    return(
        <LettersUsedContainer>
            <h5>Letras utilizadas</h5>

            <div>
                <Letter value="r" size="small" color="correct" />
                
                <Letter value="x" size="small" color="wrong" />
            </div>
        </LettersUsedContainer>
    )
}