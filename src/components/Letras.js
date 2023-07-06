export default function Letras ({letter, isDisabled}) {

    function oi (){
        alert('oi')
    }

    return( 
        <>
            <button className="letter" disabled={isDisabled} onClick={oi}>{letter}</button>
        </>
    )
}