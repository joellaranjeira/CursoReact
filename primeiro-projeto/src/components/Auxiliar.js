import { useState } from 'react'
import HelloWorld from './HelloWorld'
import Frases from './Frases'
import SayMyName from './SayMyName'
import Pessoa01 from './Pessoa01'
import Pessoa02 from './Pessoa02'
import List01 from './List01'
import Evento01 from './Evento01'
import Evento02 from './Evento02'
import Form01 from './Form01'
import Form02 from './Form02'
import Condicional from './Condicional'
import List02 from './List02'
import SueNome from './SeuNome'
import Saudacao from './Saudacao'

function Auxiliar (){
    
  const nome = "Gabriel"
  const meusItens = ['React', 'Vue', "Angula"]
  const [nome1, setNome1] = useState()

  return (
   <div className = "App">
    <h2>Renderização de State Lif</h2>
    <h1>Primeiro Exemplo - SeuNome</h1>
    <SueNome setNome = {setNome1}/>
    <h1>Segundo Exemplo - Saudacao</h1>
    <Saudacao nome1={nome1}/>

    <h2>Renderização de Listas</h2>
    <h1>Primeiro Exemplo - List02</h1>
    <List02 itens={meusItens}/>
    <h1>Segundo Exemplo - List02</h1>
    <List02 itens={[]}/>

    <h2>Condicional</h2>
    <h1>Primeiro Exemplo - Condicional</h1>
    <Condicional/>

    <h2>Eventos</h2>
    <h1>Exemplo 01</h1>
    <Evento01/>
    <h1>Exemplo 02</h1>
    <Evento02/>

    <h2>Formulario</h2>
    <h1>Exemplo 01</h1>
    <Form01/>
    <h1>Exemplo 02</h1>
    <Form02/>
    
    <h2>Primeiros Exemplo - HelloWorld</h2>

    <HelloWorld/> 

    <SayMyName nome="Mathues"/>     

    <SayMyName nome={nome}/>

    <Pessoa01 nome="Fabricio" idade = "10" profissao = "Dev" foto = "https://via.placeholder.com/150"/>

    <Pessoa02 nome="Alair" idade = "15" profissao = "Suporte" foto = "https://via.placeholder.com/150"/>

    <Frases/>

    <List01/>
   </div>
  )
}

export default Auxiliar
