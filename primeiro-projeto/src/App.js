import './App.css'
import HelloWorld from './components/HelloWorld'
import Frases from './components/Frases'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Pessoas from './components/Pessoas'

function App() {

  const nome = "Gabriel"
  return (
   <div className = "App">

    <HelloWorld/> 

    <SayMyName nome="Mathues"/>

    <SayMyName nome={nome}/>

    <Pessoa nome="Fabricio" idade = "10" profissao = "Dev" foto = "https://via.placeholder.com/150"/>

    <Pessoas nome="Alair" idade = "15" profissao = "Suporte" foto = "https://via.placeholder.com/150"/>

    <Frases/>
   </div>
  )
}

export default App;
