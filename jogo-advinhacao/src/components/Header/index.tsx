import { HeaderContainer } from "./styles"
import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

type Props = {
    current: number
    max: number
    onRestart: () => void
}

export function Header({ current, max, onRestart }: Props) {
    return(
        <HeaderContainer>
            <img src={logo} alt="Logo" />

            <div>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>

                <button type="button" onClick={onRestart}>
                    <img src={restart} alt="Ícone de reiniciar" />
                </button>
            </div>
        </HeaderContainer>
    )
}