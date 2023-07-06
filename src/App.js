import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"
import { useState } from "react"

export default function App() {

  const letters = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  const [ letterSelected, setLetterSelected] = useState(["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
  const [ word, setWord] = useState([])

  return (
    <>
      <Jogo word={word}/>
      <div className="container-letters">
        {letters.map((letter, indice) => <Letras letter={letter} isDisabled={letterSelected.includes(letter)? true : false} key={indice}/>)}
      </div>
    </>
  )
}
