import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter,setCounter] = useState(6)
  

  // let counter = 6
  const addValue = ()=>{
if (counter<24) {
  counter+=1
  setCounter(counter)
}else{
  setCounter("You can't go above 24")
  counter = 24

}
  }
  
// remove value
const removeValue = ()=>{
  if (counter>0) {
    setCounter(counter-1)
  } else{
    setCounter("You can't Go in Minus")
    counter = 0
  }
}

// reset value
const resetValue = ()=>{
  setCounter(6)
}

  return (
    <>
  <h1>Counter</h1>    
  <h2>Counter Value: {counter}</h2>
  <button onClick={addValue}>Add Value {counter}</button>
  <button onClick={removeValue}>Remove Value {counter}</button>
  <button onClick={resetValue}>Reset </button>
  <p>Footer: {counter}</p>
    </>
  )
}

export default App
