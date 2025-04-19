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
  const { text, dueDate } = req.body;
  const newTodo = new Todo({
    text,
    completed: false,
    dueDate: dueDate ? new Date(dueDate) : null,
  });
  const saved = await newTodo.save();
  res.status(201).json(saved);
});


// Toggle completed
app.patch('/api/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).send('Not found');
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

app.put('/api/todos/:id', async (req, res) => {
  const { text } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { text },
    { new: true }
  );
  res.json(todo);
});


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
