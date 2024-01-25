import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const Tags = {
    tag1:"#Laptop",
    tag2:"#Microsoft",
    tag3:"#Apple",
    tag4:"#Dell",
    tag5:"#Rog",
    tag6:"#HP",
}

  return (
    <>
      <h1 className='bg-green-300 text-black p-3 rounded-xl mb-3'>Tailwind Test</h1>
    <Card productName = "Windows Laptop" tags = {Tags}/>
    <Card productName = "Apple Laptop" tags = {Tags}/>
    </>
  )
}

export default App
