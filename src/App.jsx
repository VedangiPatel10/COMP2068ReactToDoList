import { useState } from 'react'
import TodoItem from './components/TodoItem.jsx'
import './App.css'

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