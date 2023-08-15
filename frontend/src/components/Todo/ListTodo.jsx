import React from 'react'
import axios from '../../axios'
import { useState } from 'react'
function CreateBoxTodo({todo, setTodos, index, todos}) {

  const [editing, setEditing] = useState(false)

  function MarkDone(button) {
    var task_id = button.target.id
    var data = JSON.stringify({"done":true})
    axios.put(`/tasks/${task_id}`, data)
    .then((response) => {
      if(response.data) {
        var old_todos = [...todos]
        var data_todo = old_todos[index]
        data_todo.done = true
        old_todos[index] = data_todo

        setTodos(old_todos)
      }
    })
  } 

  function Delete(button) { 
    var task_id = button.target.id
    console.log(button.target)

    axios.delete(`/tasks/${task_id}`)
    .then((response) => {
      if(response.status == 200) {
        setTodos(todos.filter((todo) => todo.id != task_id))
      }
    })
  }

  function editTodo(e) {
    var target = e.target
    var id = target.id
    var data = JSON.stringify({"todo":target.value})
    axios.put(`/tasks/${id}`, data)
    .then((response)=> {

      var old_todos = [...todos]
      var data_todo = old_todos[index]
      data_todo.todo = target.value
      old_todos[index] = data_todo

      setTodos(old_todos)
      setEditing(false)
    })
  }

  function Reopen(e) {
    var task_id = e.target.id
    var data = JSON.stringify({"done":false})
    axios.put(`/tasks/${task_id}`, data)
    .then((response) => {
      if(response.data) {
        var old_todos = [...todos]
        var data_todo = old_todos[index]
        data_todo.done = false
        old_todos[index] = data_todo

        setTodos(old_todos)
      }
    })
  }


  return (
      <div className='flex justify-between pr-5 pl-5 font-semibold leading-relaxed'>
      {!editing ? 
      todo.done ? <s><p onClick={() => {setEditing(true)}}>{todo.todo}</p></s> : <p onClick={() => {setEditing(true)}}>{todo.todo}</p> : 
                  <input id={todo.id} type="text" className="bg-transparent" placeholder='edit' onBlur={(e) => editTodo(e)}></input> }
      <div className='flex gap-3'>
        {!todo.done ? <button onClick={(e) => MarkDone(e)} index={index} className='fa fa-check'  id={todo.id}></button> : 
                      <button className='fa-solid fa-arrow-rotate-left' id={todo.id} onClick={(e) => Reopen(e)}></button>}
        <button onClick={(e) => Delete(e)}><span className='fa fa-trash text-red-500' id={todo.id}></span></button>
      </div>
      </div>
  )
}

function ListTodo({todos, setTodos, unfinishedonly}) {

  const filteredTodos = unfinishedonly ? todos.filter(todo => !todo.done) : todos;

  const result = filteredTodos.map((todo, index) => (
    <CreateBoxTodo key={index} todo={todo} setTodos={setTodos} index={index} todos={todos} />
  ));
  

  return (
    <div className='flex flex-col gap-2 mt-5'>
      { result }
    </div>
  )
}

export default ListTodo
