function Saudacao ({nome1}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }

    return <>{nome1 && <p>{gerarSaudacao(nome1)}</p>}</>
}

export default Saudacao