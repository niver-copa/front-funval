import { useState } from 'react'
import './App.css'
import FormVendedores from './formVendedores/FormVendedores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormVendedores/>
    </>
  )
}

export default App
