import React from "react";

import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if(task.trim()==="") return;
    const newTodo = {
      id: Date.now(),
      test:task,
      completed:false

    };

    setTodos([...todos,newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item)=>item.id!==id));
 };

  const toggleComplete = (id) => {
    setTodos(todos.map((item)=>
      item.id===id?{...item,completed:!item.completed}:item
    ));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

    </div>
  );
}

export default App;
