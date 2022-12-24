import './App.css'
import HelloWorld from './components/HelloWorld'
import Frases from './components/Frases'
import SayMyName from './components/SayMyName'
import Pessoa01 from './components/Pessoa01'
import Pessoa02 from './components/Pessoa02'
import List01 from './components/List01'
import Evento01 from './components/Evento01'
import Evento02 from './components/Evento02'
import Form01 from './components/Form01'
import Form02 from './components/Form02'
import Condicional from './components/Condicional'
import List02 from './components/List02'

function App() {

  const nome = "Gabriel"
  const meusItens = ['React', 'Vue', "Angula"]
  return (
   <div className = "App">
    <h2>Renderização de Listas</h2>
    <h1>Primeiro Exemplo</h1>
    <List02 itens={meusItens}/>
    <List02 itens={[]}/>

    <h2>Condicional</h2>
    <h1>Primeiro Exemplo</h1>
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

export default App;
