import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

const[length,setLength]= useState(9) 
const[numAllowed, setNumAllowed] = useState(false)
const[charAllowed, setCharAllowed] = useState(false)
const[password, setPassword] = useState("")

// useRef
const passwordRef = useRef(null)

const passwordGenerator= useCallback(()=>{
  let pass = ""
let str= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
if (numAllowed) str += "0123456789"
if (charAllowed) str += "!@#$%^&*()_+"

for (let i = 1; i <= length; i++) {
 
    let char = Math.random() * str.length +1
    pass += str.charAt(char)
  
}
setPassword(pass)



},[length,numAllowed,charAllowed])

const copyToClipBoard = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,24)
},[password])

useEffect(()=>{
  passwordGenerator()
}
  ,[length,numAllowed,charAllowed,passwordGenerator])


  return (
    <>
    <div className='h-screen w-full m-0 p-0'>

<div className='w-full max-w-md mx-auto shadow-xl rounded-lg px-3 py-6 my-9 text-yellow-300 bg-blue-600 '>
  <h1 className='text-center font-bold'>Password Generator</h1>

  <div className='flex shadow rounded-lg  mb-3'>
    <input type="text" value={password} placeholder='Password' readOnly ref={passwordRef}
      className='text-blue-600 font-semibold outline-none w-full py-1 px-3 rounded-md' />
    <button 
    onClick={copyToClipBoard}
    className='outline-none bg-yellow-300 text-blue-600 px-3 py-0.5 rounded-lg'>Copy</button>

  </div>

  <div className='flex text-sm gap-x-2'>

    <div className='flex items-center gap-x-1'>

      <input type="range" min={6} max={24} value={length} className=' cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
      />
      <label>Length:{length} </label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numAllowed} id='numberInput'
       onChange={()=>setNumAllowed((prev)=>!prev)}
      />
      <label>:Numbers </label>
      <input type="checkbox" defaultChecked={charAllowed} id='charInput' 
      onChange={()=>setCharAllowed((prev)=>!prev)}
      />
      <label>:Character </label>
    </div>


  </div>




</div>

</div>
    </>
  )
}

export default App
