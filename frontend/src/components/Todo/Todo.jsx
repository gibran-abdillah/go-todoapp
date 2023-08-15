import React, { useState } from 'react'
import ListTodo from './ListTodo'
import axios from '../../axios'

function TodoWrapper({todos, setTodos}) {

  function addTodo() {
    var todo = document.getElementById("text")
    var data = JSON.stringify({"todo":todo.value})
    var old_todos = [...todos]
    axios.post('/tasks', data)
    .then((response) => {
      if(response.status == 201) {
        old_todos.push(response.data)
        setTodos(old_todos)
        todo.value = ''
      }
    })
  }

  const [unfinishedonly, setunfinishedonly] = useState(false)

  return (
      <div className='bg-orange-200 h-[35rem] w-[35rem] text-center rounded-xl shadow-2xl'>
        <h1 className='text-xl font-bold tracking-wider mb-5 mt-2'>To Do List!</h1>

        <div className='flex-col text-left mt-4 mb-3'>

            <input type="text" key="text" name="text" placeholder='Add your data here' id='text' className='bg-transparent ml-5 w-1/2 border-b-2 border-black pb-1 mr-4 text-black'></input>
            <button onClick={addTodo} className='rounded bg-blue-200 pl-2 pr-2 pb-1 font-medium'>Add Data</button>
        </div>
        <div className='text-left ml-5'>
          <input type="checkbox" onClick={() => {setunfinishedonly(!unfinishedonly)}}></input>
          <span className='inline-flex ml-5'>Show only unfinished</span>
        </div>
        
        <ListTodo todos={todos} setTodos={setTodos} unfinishedonly={unfinishedonly}/>
      </div>
  )
}

export default TodoWrapper
