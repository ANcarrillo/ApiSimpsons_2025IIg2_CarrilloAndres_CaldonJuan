import './App.css'
import Imfondo from '../src/assets/7SJ1.gif'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Characters from './Pages/Characters/Characters'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
      <Router>
        <Header />
        <div id='container-pages'>
          <div id='container'>
            
            <Routes>
              
              <Route path='/personajes' element={<Characters />} />

            </Routes>
          </div>
          <NavBar />
        </div>
      </Router>
    </>
  )
}

export default App
