import { useState } from 'react'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header/>
    </div>
  )
}

export default App
