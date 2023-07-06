import { useState } from "react"

export default function Jogo({word}) {
    const printWord = word.map(letter => letter)
    
    return (
        <>
            <div className="container-game">
                <div className="left">
                    <div className="forca">
                        <img src="/assets/forca0.png" alt="forca0" />
                    </div>
                </div>
                <div className="right">
                    <button>Escolher Palavra</button>
                    <span>{printWord}</span>
                </div>
            </div>
        </>
    )
}