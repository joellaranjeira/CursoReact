function Evento01 () {

    function meuEvento(){
        console.log("Botao foi ativado!")
    }

    return (
        <div>
            <p> Clique no botao para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}


export default Evento01