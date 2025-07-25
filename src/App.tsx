import './App.css'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
        <Home titulo='Notícias' texto=' Lucro do FGTS: saiba quanto vai receber e como verificar saldo Lucro do FGTS: saiba quanto vai receber e como verificar saldo' />
        <Contador />
        <Tarefa />
        <Login />
    </>
  )
}

export default App
