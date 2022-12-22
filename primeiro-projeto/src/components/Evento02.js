import Button from './eventos/Button01'
function Evento02 () {

    function meuEvento(){
        console.log('Ativando o primeiro evento - Evento02!')
    }

    function segundoEvento(){
        console.log('Ativando o segundo Evento - Evento02')
    }

    return (
        <div>
            <p> Clique no botao para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento - Evento02"/>
            <Button event={segundoEvento} text="Segundo Evento - Evento02"/>            

        </div>
    )
}


export default Evento02