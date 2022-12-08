import './App.css';

function App() {

  const name = 'Joel'
  const newName = name.toUpperCase()

  function sum ( a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
   <div className = "App">

    <h2>Olá {newName}</h2>
    
    <h1>A soma é: {sum(3,9)}</h1>

    <img src={url} alt="Minha imagem"/>

   </div>
  )
}

export default App;
