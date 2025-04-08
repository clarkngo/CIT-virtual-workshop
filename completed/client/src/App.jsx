import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const res = await axios.get('/api/todos') // Relative path = works with Vite proxy
      setTodos(res.data)
    } catch (err) {
      console.error('Error fetching todos:', err)
    }
  }

  // Add new todo
  const addTodo = async (text) => {
    try {
      const res = await axios.post('/api/todos', { text })
      setTodos([res.data, ...todos])
    } catch (err) {
      console.error('Error adding todo:', err)
    }
  }

  // Toggle todo completed
  const toggleTodo = async (id) => {
    try {
      const res = await axios.patch(`/api/todos/${id}`)
      setTodos(todos.map(todo => todo._id === id ? res.data : todo))
    } catch (err) {
      console.error('Error toggling todo:', err)
    }
  }

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`)
      setTodos(todos.filter(todo => todo._id !== id))
    } catch (err) {
      console.error('Error deleting todo:', err)
    }
  }

  // Load todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h1>📝 Fullstack To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
