import {useState} from 'react'

function Form02 () {

    function cadastrarUsuario02 (e) {
        e.preventDefault()
        console.log('Usuario ${name} senha ${password}')
        
       }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
          <h1>Meu cadastro 02</h1>
          <form onSubmit={cadastrarUsuario02}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type = "text" 
                id="name" 
                name="name" 
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password" id="assword" name="password">Senha: </label>
                <input 
                type = "password" 
                placeholder="Digite a sua senha:"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type= "submit" value="Cadastro"/>
            </div>
          </form>
        </div>
    )
}

export default Form02