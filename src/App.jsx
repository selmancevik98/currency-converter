import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currency from './components/currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Currency />
    </>
  )
}

export default App
