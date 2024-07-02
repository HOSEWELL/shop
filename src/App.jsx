import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductContainer from './components/productscontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ProductContainer/>
    </>
  )
}

export default App
