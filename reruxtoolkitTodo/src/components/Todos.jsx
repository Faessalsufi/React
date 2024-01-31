import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
 

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div className="text-xl font-semibold mb-4">
        Todo
    </div>
    {todos.map((todo) => (
      
        <li 
        key={todo.id}
        className="flex items-center justify-between mb-2"
        > 
        {todo.text}

        <button
        className="text-red-500 hover:text-red-600 focus:outline-none "
        onClick={() => dispatch(removeTodo(todo.id))}>
            Delete
        </button>

        </li>

    ))}
    </>
  )
}

export default Todos