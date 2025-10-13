import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Characters from './Pages/Characters/Characters'
import CharacterDetail from './Pages/CharacterDetail/CharacterDetail'
import Locations from './Pages/Locations/Locations'
import Episodes from './Pages/Episodes/Episodes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
      <Router>
        <Header />
        <div id='container-pages'>
          <div id='container'>
            <Routes>

              <Route path="/personajes" element={<Characters />} />
              <Route path="/personaje/:id" element={<CharacterDetail />} />
              <Route path="/episodios" element={<Episodes />} />
              <Route path="/localizacion" element={<Locations />} />
              <Route path="*" element={<div>404 - Página no encontrada</div>} />

            </Routes>
          </div>
          <NavBar />
          
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
