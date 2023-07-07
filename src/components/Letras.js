export default function Letras ({letter, isDisabled, classDisabled, clickLetter}) {

    return( 
        <>
            <button className={`letter ${classDisabled}`} disabled={isDisabled} onClick={() => clickLetter(letter)}>{letter}</button>
        </>
    )
}