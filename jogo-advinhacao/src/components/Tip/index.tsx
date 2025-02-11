import { TipContainer } from "./styles"
import tipIcon from "../../assets/tip.svg"

type Props = {
    tip: string
}

export function Tip({ tip }: Props) {
    return(
        <TipContainer>
            <img src={tipIcon} alt="Ícone de dica" />

            <div>
                <h3>Dica</h3>

                <p>{tip}</p>
            </div>
        </TipContainer>
    )
}