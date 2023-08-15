import logo from './logo.svg';
import './App.css';
import TodoWrapper from './components/Todo/Todo';
import axios from './axios';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchData() {
      var response = await axios.get('/tasks')
      setTodos(response.data)
    }
    fetchData();
  }, [])

  

  return (
    <div className="flex justify-center items-center h-screen">
      <TodoWrapper todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
