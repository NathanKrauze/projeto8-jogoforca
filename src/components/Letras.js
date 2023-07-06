export default function Letras ({letter, isDisabled, classDisabled}) {

    function oi (){
        alert('oi')
    }

    return( 
        <>
            <button className={`letter ${classDisabled}`} disabled={isDisabled} onClick={oi}>{letter}</button>
        </>
    )
}