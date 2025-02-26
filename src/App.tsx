import { WORDS, Challenge } from "./utils/words"
import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed, LetterUsedProps } from "./components/LettersUsed"

const ATTEMPTS_MARGIN = 5

export function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LetterUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame() {
    const isConfirmed = window.confirm("Tem certeza que deseja reiniciar o jogo?")

    if(isConfirmed) {
      startGame()
    }
  }

  function startGame() {
    //sorteia um número aleatório do tamanho do array WORD
    const index = Math.floor(Math.random() * WORDS.length)

    //pega o número sortreado e analisa a posição do array que ele é e armazena na variável
    const randomWord = WORDS[index]

    //atualiza o useState armazenando o objeto do array WORD
    setChallenge(randomWord)

    //zera as tentativas ao iniciar o jogo
    setScore(0)

    //reseta as letras do palpite
    setLetter("")

    setLettersUsed([])
  }

  function handleConfirm() {
    if(!challenge) {
      return
    }

    if(!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase()
    const exist = lettersUsed.find((used) => used.value.toLocaleUpperCase() === value)

    if(exist) {
      setLetter("")
      return alert("Você já utilizou a letra " + value)
    }

    //separa a palavra sorteada e filtra pra ver se tem alguma igual ao value
    const hits = challenge.word.toLocaleUpperCase().split("").filter((char) => char === value).length

    //a const correct é true se hits for maior que 0, ou seja se a palavra tiver uma ou mais da letra escolhida
    const correct = hits > 0

    const currentScore = score + hits

    setLettersUsed((prevState) => [...prevState, {value, correct }])
    setScore(currentScore)

    setLetter("")
  }

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if(!challenge){
      return
    }

    setTimeout(() => {
      if(score === challenge.word.length) {
        return endGame("Parabéns, você descobriu a palavra!")
      }

      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN

      if(lettersUsed.length === attemptLimit) {
        return endGame("Você usou todas as tentivas!")
      }
    }, 200)
  }, [score, lettersUsed.length])

  if(!challenge) {
    return
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <main>
        <Header current={lettersUsed.length} max={challenge.word.length + ATTEMPTS_MARGIN} onRestart={handleRestartGame} />

        <Tip tip={challenge.tip} />

        <div className="word">
          {
            challenge.word.split("").map((letter, index) => {
              const letterUsed = lettersUsed.find((used) => used.value.toLocaleUpperCase() === letter.toLocaleUpperCase())
              
              return <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "correct" : "default"} />
            })
          }
          
        </div>

        <h4>Palpite</h4>

        <div className="guess">
          <Input 
          autoFocus maxLength={1} 
          placeholder="?" 
          onChange={(e) => setLetter(e.target.value)} 
          value={letter}
          />

          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>

    </ThemeProvider>
  )
}

