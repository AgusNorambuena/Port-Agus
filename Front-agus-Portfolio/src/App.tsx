import Nav from './assets/componentes/Nav'
import Sobremi from './assets/componentes/Sobremi'
import Proyectos from './assets/componentes/Proyectos'
import {ContactoForm} from './assets/componentes/ContacoForm'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='bg-[#013A63] min-h-screen min-w-screen'>
        <Sobremi />
        <Proyectos />
        <ContactoForm />
      </main>
    </>

  )
}

export default App
