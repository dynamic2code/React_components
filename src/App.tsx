// import { useState } from 'react'
import './App.css'
import BloogCard from './BloogCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h3>This is a showcase of my collection of react components</h3>
    <div className='holder'>
      <BloogCard></BloogCard>
    </div>
    </>
  )
}

export default App