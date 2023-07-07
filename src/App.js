import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"
import { useState } from "react"

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  const [ letterClicked, setLetterClicked] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
  const [ word, setWord] = useState([])
  const [ printWord, setPrintWord] = useState([])
  const [ wrongGuesses, setWrongGuesses] = useState(0)
  const [ loose, setLoose] = useState(undefined)
  const [ win, setWin ] = useState(undefined)

  function chooseWord () {
    setLetterClicked([])
    setWrongGuesses(0)
    setLoose(undefined)
    setWin(undefined)
    const number = Math.floor(Math.random()*palavras.length)
    const newWord = palavras[number]
    const arrayNewWord = newWord.split('')
    setWord(arrayNewWord)
    const printArray = [... arrayNewWord]
    setPrintWord(printArray.fill("_"))
  }

  function clickLetter(letter) {

    function checkArrays(prntWord, word) {
      const newPrntWord = prntWord.toString()
      const newWord = word.toString()
      if (newPrntWord === newWord){
        return true
      }else {
        return false
      }
    }

    const newArrayClicked = [...letterClicked]
    newArrayClicked.push(letter)
    setLetterClicked(newArrayClicked)
    if (word.includes(letter)) {
      let copyWord = [...word]
      let copyPrintWord = [...printWord]
      copyPrintWord = copyWord.map((chr, index) => chr===letter ? letter : copyPrintWord[index]!=='_' ? copyPrintWord[index] : '_')
      setPrintWord(copyPrintWord)
      if (checkArrays(copyPrintWord, word)){
        setWin('ganhou')
      }
    }else{
      const newWrongGuess = wrongGuesses + 1
      setWrongGuesses(newWrongGuess)
      if( newWrongGuess === 6){
        setLoose('perdeu')
        const looseWord = [...word]
        setPrintWord(looseWord)
      }
    }
  }

  return (
    <>
      <Jogo 
        word={printWord} 
        chooseWord={chooseWord} 
        forcaIndex={wrongGuesses}
        WinOrLoose={loose === 'perdeu' ? 'perdeu' : win === 'ganhou'? 'ganhou' : ''} 
      />
      <div className="container-letters">
        {alfabeto.map((letter, indice) => 
          <Letras 
            letter={letter} 
            key={indice} 
            isDisabled={letterClicked.includes(letter) || loose === 'perdeu' || win === 'ganhou'? true : false} 
            classDisabled={letterClicked.includes(letter) || loose === 'perdeu' || win === 'ganhou'? 'disabled' : ''}
            clickLetter={clickLetter} 
          />
        )}
      </div>
    </>
  )
}
