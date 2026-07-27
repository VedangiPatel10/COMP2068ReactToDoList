import { useState } from "react";
import "./App.css";

function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addToDo = () => {
        if (task.trim() !== "") const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };
 
    setTodos([
      ...todos,
      newTodo
    ]);
 
    setTask("");
  };
   const deleteTodo = (id) => {
    setTodos(
      todos.filter(
        (item) => item.id !== id
      )
    );
};

const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed
            }
          : item
      )
    );
  };
  return (
    <div className="container">
 
      <h1>To-Do List</h1>
 
 
      {/* Add Todo */}
      <div className="input-section">
 
        <input
          type="text"
          placeholder="Add a to-do..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
 
 
        <button onClick={addTodo}>
          Add
        </button>
 
      </div>
 
 
      <ul>
 
        {todos.map((item) => (
 
          <li key={item.id}>
 
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() =>
                toggleComplete(item.id)
              }
            />
 
 
            <span
              className={
                item.completed
                  ? "todo-text completed"
                  : "todo-text"
              }
            >
              {item.text}
            </span>
 
 
            <button
              className="delete-btn"
              onClick={() =>
                deleteTodo(item.id)
              }
            >
              Delete
            </button>
 
 
          </li>
 
        ))}
 
      </ul>
 
 
    </div>
  );
};
export default App;