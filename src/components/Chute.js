export default function Chute({isDisabled, classDisabled, wordGuessed, setWordGuessed, word, setPrintWord, setWin, setLoose, setWrongGuesses, setInputDisabled}){

    function guessword () {
        const arrayWordGuessed = wordGuessed.split('')
        const copyWord = [...word]
        setWordGuessed('')
        setInputDisabled(true)
        if(arrayWordGuessed.toString()===copyWord.toString()){
            setWin('win')
        }else {
            setLoose('loose')
            setWrongGuesses(6)
        }
        setPrintWord([...word])
        
    }

    return (
        <div className="guess-word">
            <span>Já sei a palavra!</span>
            <input 
                className={classDisabled} 
                disabled={isDisabled}
                value={wordGuessed}
                onChange={e => setWordGuessed(e.target.value)}
                type="text">
            </input>
            <button onClick={guessword}>Chutar</button>
        </div>
    )
}