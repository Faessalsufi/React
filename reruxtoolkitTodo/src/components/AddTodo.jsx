import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'



function AddTodo() {
   const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
   <form onSubmit={addTodoHandler} className="flex items-center justify-center mt-8" >
        <input
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder='Enter a Todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none"
        > Add </button>
   </form>

  )
}

export default AddTodo