import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from "react"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Posts from './Posts'
import { useState } from 'react'
import './App.css'

const ReactMemo = lazy(() => import("./pages/ReactMemo"))
const CallbackHook = lazy(() => import("./pages/CallbackHook"))
const MemoHook = lazy(() => import("./pages/MemoHook"))
const TransitionHook = lazy(() => import("./pages/TransitionHook"))

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [updating, setUpdating] = useState(false)

  function addTodo() {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, updating: false }])
      setNewTodo('')
    }
  }

  function updateTodo(id, newText) {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleUpdating(id) {
    setUpdating(!updating)
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, updating: !todo.updating } : todo)))
  }

  return (
   
 <div className="App">
    <h1>React To-Do App</h1>
      <input
        type="text"
        placeholder="Add a new to-do"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => (e.key === 'Enter' ? addTodo() : null)}
      />
      <ul>
        {todos.map(todo => (
          <li className="todo-item"  key={todo.id} >
            <div className="input-group">
            <input
              type="checkbox"
              disabled={todo.updating && updating ? true : false}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.updating && updating ? (
              <input
                type="text"
                value={todo.text}
                onChange={e => updateTodo(todo.id, e.target.value)}
                onKeyDown={e => (e.key === 'Enter' ? toggleUpdating(todo.id) : null)}
              />
            ) : (
              <div 
                className='todo-item__text'
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </div>
            )
            }
            </div>
            <div className="btn-group">
              <button 
                disabled={(todo.updating && updating) || todo.completed ? true : false} 
                onClick={() => toggleUpdating(todo.id)}
              >
                Edit
              </button>
              <button 
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react-memo" element={<ReactMemo />} />
          <Route path="/use-callback" element={<CallbackHook />} />
          <Route path="/use-memo" element={<MemoHook />} />
          <Route path="/use-transition" element={<TransitionHook />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    <div className="App">
    <h1>Using APIs</h1>
    <Posts />
 </div>
  </div>
  </div>
  )
}

export default App