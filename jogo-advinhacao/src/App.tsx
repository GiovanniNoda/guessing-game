import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

export function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header current={5} max={10} onRestart={handleRestartGame} />
      <Tip tip="Uma das linguagens de programação mais utilizadas" />
    </ThemeProvider>
  )
}

