
export default function Jogo({word, chooseWord, forcaIndex, WinOrLoose}) {
    let printWord = word.map(letter => letter)
    //printWord = printWord.toString()

    return (
        <>
            <div className="container-game">
                <div className="left">
                    <div className="forca">
                        <img src={`/assets/forca${forcaIndex}.png`} alt="forca" />
                    </div>
                </div>
                <div className="right">
                    <button onClick={chooseWord}>Escolher Palavra</button>
                    <span className={WinOrLoose}>{printWord}</span>
                </div>
            </div>
        </>
    )
}