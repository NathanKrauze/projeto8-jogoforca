
export default function Jogo({word, chooseWord, forcaIndex, WinOrLoose}) {
    let printWord = word.map(letter => letter)
    //printWord = printWord.toString()

    return (
        <>
            <div className="container-game">
                <div className="left">
                    <div className="forca">
                        <img src={`/assets/forca${forcaIndex}.png`} alt="forca" data-test='game-image' />
                    </div>
                </div>
                <div className="right">
                    <button onClick={chooseWord} data-test='choose-word'>Escolher Palavra</button>
                    <span className={WinOrLoose} data-test='word'>{printWord}</span>
                </div>
            </div>
        </>
    )
}