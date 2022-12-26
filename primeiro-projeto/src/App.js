import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'

function App() {

  return (
    <Router>
        <NavBar/>
        <Switch>
              <Route exact path="/"> 
                <Home/> 
              </Route>
              <Route path="/empresa"> 
                <Empresa/>  
              </Route>
              <Route path="/contato"> 
                <Contato/>  
              </Route>
        </Switch>
        <Footer/>
    </Router>
  )
}

export default App;