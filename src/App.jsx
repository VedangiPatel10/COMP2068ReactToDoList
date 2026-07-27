import { useState } from 'react'
import TodoItem from './components/TodoItem.jsx'
import './App.css'
function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false
    };

    setTodos([...todos, newTodo]);
    setText("");
  }


function App() {

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="add-row">
        <input
          type="text"
          placeholder="Add a to-do..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <p className="empty-message">Your to-dos will appear here.</p>
    </div>
  )
}

export default App
}