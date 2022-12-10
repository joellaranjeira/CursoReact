function Pessoa (props) {
    return (
        <div>
            <h1>Componente numero Pessoa</h1>
            <img src={props.foto} alt={props.nome}/>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}

export default Pessoa