import Jogo from "./components/Jogo"
import Letras from "./components/Letras"

export default function App() {

  const letters = ["A", "B", "C", "D", "E", "F", "J", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  return (
    <>
      <Jogo />
      <div className="container-letters">
        {letters.map(letter => <Letras letter={letter}/>)}
      </div>
    </>
  )
}
