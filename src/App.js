import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"
import { useState } from "react"

export default function App() {

  const letters = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  const [ letterSelected, setLetterSelected] = useState(["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
  const [ word, setWord] = useState([])
  const [ printWord, setPrintWord] = useState([])
  const [ wrongGuesses, setWrongGuesses] = useState(0)

  function chooseWord () {
    setLetterSelected([])
    setWrongGuesses(0)
    const number = Math.floor(Math.random()*palavras.length)
    const newWord = palavras[number]
    const arrayNewWord = newWord.split('')
    setWord(arrayNewWord)
    const printArray = [... arrayNewWord]
    setPrintWord(printArray.fill("_"))
  }

  return (
    <>
      <Jogo 
        word={printWord} 
        chooseWord={chooseWord} 
        forcaIndex={wrongGuesses} />
      <div className="container-letters">
        {letters.map((letter, indice) => 
          <Letras 
            letter={letter} 
            key={indice} 
            isDisabled={letterSelected.includes(letter)? true : false} 
            classDisabled={letterSelected.includes(letter)? 'disabled' : ''} />)}
      </div>
    </>
  )
}
