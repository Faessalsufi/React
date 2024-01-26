import { useState } from 'react'


function App() {
  const [color,setColor] = useState("maroon")

  return (
    <>
      <div className='w-full h-screen bg-blue-300 m-0 p-0' style={{backgroundColor: color}}>

<div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
<div className='flex flex-wrap gap-3 shadow-xl bg-white rounded-full px-3 py-3'>
<button onClick={()=> setColor("blue")}   className='outline-none px-3 py-3 bg-blue-600 rounded-full  text-white'>Blue</button>
<button  onClick={()=> setColor("orange")} className='outline-none px-3 py-3 bg-orange-300 rounded-full text-white'>Orange</button>
<button onClick={()=> setColor("yellow")}  className='outline-none px-3 py-3 bg-yellow-300 rounded-full text-white'>Yellow</button>
<button onClick={()=> setColor("green")}  className='outline-none px-3 py-3 bg-green-600 rounded-full text-white'>Green</button>
<button onClick={()=> setColor("pink")}  className='outline-none px-3 py-3 bg-pink-600 rounded-full text-white'>Pink</button>
<button onClick={()=> setColor("purple")}  className='outline-none px-3 py-3 bg-purple-600 rounded-full text-white'>Purple</button>
</div>
</div>

      </div>
    </>
  )
}

export default App
