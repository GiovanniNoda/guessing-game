import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

export function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />

        <div className="word">
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div className="guess">
          <Input autoFocus maxLength={1} placeholder="?" />

          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>

    </ThemeProvider>
  )
}

