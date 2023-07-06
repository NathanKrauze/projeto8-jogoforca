import { useState } from "react"

export default function Jogo({word, chooseWord, forcaIndex}) {
    const printWord = word.map(letter => letter)

    return (
        <>
            <div className="container-game">
                <div className="left">
                    <div className="forca">
                        <img src={`/assets/forca${forcaIndex}.png`} alt="forca0" />
                    </div>
                </div>
                <div className="right">
                    <button onClick={chooseWord}>Escolher Palavra</button>
                    <span>{printWord}</span>
                </div>
            </div>
        </>
    )
}