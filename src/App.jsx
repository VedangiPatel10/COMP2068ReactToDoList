import { useState } from 'react'
import TodoItem from './components/TodoItem.jsx'
import './App.css'

function App() {
  // ---------------------------------------------------------------
  // STEP 2: Add state for the list of to-dos and the text input.
  // Replace the line below with:
  //   const [todos, setTodos] = useState([]);
  //   const [text, setText] = useState("");
  // ---------------------------------------------------------------
  // const [todos, setTodos] = useState([]);
  // const [text, setText] = useState("");

  // ---------------------------------------------------------------
  // STEP 3: Write a function that adds a new to-do to the array.
  // Hint: use the spread operator, just like addAssignment() did
  // in the demo app.
  // ---------------------------------------------------------------
  const handleAdd = () => {
    // if (text.trim() === "") return;
    // const newTodo = { id: Date.now(), text: text, done: false };
    // setTodos([...todos, newTodo]);
    // setText("");
  }

  // ---------------------------------------------------------------
  // STEP 5a: Write a function that flips "done" on the matching todo.
  // Hint: this is the same pattern as toggleComplete() in the demo app.
  // ---------------------------------------------------------------
  const handleToggle = (id) => {
    // setTodos(
    //   todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    // );
  }

  // ---------------------------------------------------------------
  // STEP 5b: Write a function that removes the matching todo.
  // Hint: this is the same pattern as deleteAssignment() in the demo app.
  // ---------------------------------------------------------------
  const handleDelete = (id) => {
    // setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="add-row">
        <input
          type="text"
          placeholder="Add a to-do..."
          // STEP 2 (continued): wire this input up to state
          // value={text}
          // onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/*
        STEP 4: Render the list here.
        Replace this placeholder with:

        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      */}
      <p className="empty-message">Your to-dos will appear here.</p>
    </div>
  )
}

export default App