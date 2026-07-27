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

}