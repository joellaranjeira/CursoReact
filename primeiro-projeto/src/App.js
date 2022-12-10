import './App.css'
import HelloWorld from './components/HelloWorld'
import Frases from './components/Frases'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Pessoas from './components/Pessoas'
import List from './components/List'

function App() {

  const nome = "Gabriel"
  return (
   <div className = "App">
    <h2>App page</h2>

    <HelloWorld/> 

    <SayMyName nome="Mathues"/>     

    <SayMyName nome={nome}/>

    <Pessoa nome="Fabricio" idade = "10" profissao = "Dev" foto = "https://via.placeholder.com/150"/>

    <Pessoas nome="Alair" idade = "15" profissao = "Suporte" foto = "https://via.placeholder.com/150"/>

    <Frases/>

    <List/>
   </div>
  )
}

export default App;
