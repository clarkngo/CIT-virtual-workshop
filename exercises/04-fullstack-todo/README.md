# Get Started
In your terminal, type `cd exercises/04-fullstack-todo`

# Build your Server with ExpressJS/NodeJS
Type the following in your terminal:
```
mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv
touch server.js
touch todoModel.js
echo "MONGO_URI=mongodb+srv://testuser:Tr0ubleFreeSecurePass987654321@cluster0.cm6bn9v.mongodb.net/?retryWrites=true&w=majority" > .env
```

## Update your serverJS file
```
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import Todo from './todoModel.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err))

// Get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find()
    res.json(todos)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Add new todo
app.post('/api/todos', async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text })
    const saved = await newTodo.save()
    res.json(saved)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Toggle completed
app.patch('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    todo.completed = !todo.completed
    const updated = await todo.save()
    res.json(updated)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Delete
app.delete('/api/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
```

## Update your todoModel.js
```
import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  text: String,
  completed: { type: Boolean, default: false }
})

export default mongoose.model('Todo', todoSchema)
```


## Run your Backend Server
```
node server.js
```

## In the Browser
Add at the end of the url `/api/todos` to view items


# Build the Todo Frontend with React
1. open a new terminal, `cd exercises/04-fullstack-todo`
2. type `npm create vite@latest client --template`
3. press `y`
4. keep pressing down arrow until `React` is highlighted and press Enter
5. keep pressing down arrow until `JavaScript` is highlighted and press Enter
6. `cd client`
7. `npm install`
8. `npm install axios`
9. `touch src/TodoForm.jsx`
10. `touch src/TodoList.jsx`
11. `npm run dev`


## Update your App.jsx
```
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
```

## Update your TodoForm.jsx
```
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
```

## Update your TodoList.jsx
```
function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => toggleTodo(todo._id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    )
  }
  
  export default TodoList
  ```

## Update your vite.config.js for proxy
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Express server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
```

## Optional:
- `package.json` should have `"type": "module"`.
- Create your own MongoDB Atlas instance for free. follow the MONGODB SETUP.pdf or reference to the official website: https://www.mongodb.com/products/platform/atlas-database
