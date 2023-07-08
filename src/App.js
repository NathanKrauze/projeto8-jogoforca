import Chute from "./components/Chute"
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
  const [ inputDisabled, setInputDisabled] = useState(true)
  const [ wordGuessed, setWordGuessed] = useState('')

  function chooseWord () {
    setLetterClicked([])
    setWrongGuesses(0)
    setLoose(undefined)
    setWin(undefined)
    setInputDisabled(false)
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
      }
    }

    const newArrayClicked = [...letterClicked]
    newArrayClicked.push(letter)
    setLetterClicked(newArrayClicked)
    if (word.includes(letter)) {
      const copyWord = [...word]
      let copyPrintWord = [...printWord]
      copyPrintWord = copyWord.map((chr, index) => chr===letter ? letter : copyPrintWord[index]!=='_' ? copyPrintWord[index] : '_')
      setPrintWord(copyPrintWord)
      if (checkArrays(copyPrintWord, word)){
        setWin('win')
        setInputDisabled(true)
        setWordGuessed('')
      }
    }else{
      const newWrongGuess = wrongGuesses + 1
      setWrongGuesses(newWrongGuess)
      if( newWrongGuess === 6){
        setLoose('loose')
        const looseWord = [...word]
        setPrintWord(looseWord)
        setInputDisabled(true)
        setWordGuessed('')
      }
    }
  }

  return (
    <>
      <Jogo 
        word={printWord} 
        chooseWord={chooseWord} 
        forcaIndex={wrongGuesses}
        WinOrLoose={loose === 'loose' ? 'loose' : win === 'win'? 'win' : ''} 
      />
      <div className="container-letters">
        {alfabeto.map((letter, indice) => 
          <Letras 
            letter={letter} 
            key={indice} 
            isDisabled={letterClicked.includes(letter) || loose === 'loose' || win === 'win'? true : false} 
            classDisabled={letterClicked.includes(letter) || loose === 'loose' || win === 'win'? 'disabled' : ''}
            clickLetter={clickLetter} 
          />
        )}
      </div>
      <Chute 
        isDisabled={inputDisabled}
        classDisabled={inputDisabled? 'disabled' : ''}
        wordGuessed={wordGuessed}
        setWordGuessed={setWordGuessed}
        word={word}
        setPrintWord={setPrintWord}
        setWin={setWin}
        setLoose={setLoose}
        setWrongGuesses={setWrongGuesses}
        setInputDisabled={setInputDisabled}
        />
    </>
  )
}
