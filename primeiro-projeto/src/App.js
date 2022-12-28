import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Home from './components/pages/Home'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact='true' element={<Home />}></Route>
            <Route path='/empresa' element={<Empresa />}></Route>
            <Route path='/contato' element={<Contato />}></Route>
          </Routes>

          <Footer />
        </Router>

      </header>

    </div>
  )
}

export default App