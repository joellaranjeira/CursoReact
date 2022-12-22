import { useState } from "react"

function Condicional (){

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(e){
        
        setUserEmail('')
   
    }

    return(
        <div>
            <form>
                <input type="email" placeholder="Digite o seu e-mail: " onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>

                {userEmail && (
                <div> 
                    <p>O email do usuario é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>   )}
            </form>
           

        </div>

    )
}

export default Condicional