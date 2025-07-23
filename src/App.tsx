import './App.css'
import { somar, dividir } from './utills/math';


function App() {
  const nome = 'Nicollas';

  return (
    <>
     <div>
      <h1>Soma: {somar(4, 2)}</h1>
      <h1>Divisão: {dividir(10, 2)}</h1>
      ^
    </div>
    </>
    
  )
}

export default App
