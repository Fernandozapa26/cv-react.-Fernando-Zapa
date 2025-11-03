import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CabeceraCV from './components/CabeceraCV'
import Perfil from './components/Perfil'
import Educacion from './components/Educacion'
import Experiencia from './components/Experiencia'
import Habilidades from './components/Habilidades'
import Contacto from './components/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CabeceraCV/>
      </div>
      <div>
        <Perfil/>
      </div>
      <div>
        <Educacion/>
      </div>
      <div>
        <Experiencia/>
      </div>
      <div>
        <Habilidades/>
      </div>
      <div>
        <Contacto/>
      </div>
     
      
    </>
  )
}

export default App
