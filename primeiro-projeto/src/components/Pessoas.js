function Pessoas ({nome, idade, profissao, foto}) {
    return (
        <div>
            <h2>Componente Pessoas</h2>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoas