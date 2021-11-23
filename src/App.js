import React, {useState, useEffect} from 'react'
import "./App.css";
import TodoForm from './Components/TodoForm';
import TodoList from "./Components/TodoList";


const LOCAL_STORAGE_KEY = "frontend-task";


function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   // fires when app component mounts to the DOM
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTodos) {
  //     setTodos(storageTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   // fires when todos array gets updated
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo=> todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo;
      })
    )
  }

  return (
    <div className="App">
      <div className="flex flex-col space-y-20">
        <div className="text-4xl">TODO List</div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}


export default App;
