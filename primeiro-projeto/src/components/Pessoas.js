function Pessoas ({nome, idade, profissao, foto}) {
    return (
        <div>
            <h1>Componente Pessoas</h1>
            <img src={foto} alt={nome}/>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoas