# Get Started
1. In your terminal, type `cd exercises/03-props`
2. type `npm create vite@latest props --template`
3. press `y`
4. keep pressing down arrow until `React` is highlighted and press Enter
5. keep pressing down arrow until `JavaScript` is highlighted and press Enter
6. `cd props`
7. `npm install`
8. `npm run dev`

# Activity - Props with React
1. Delete the contents of `main.jsx`
2. Replace with
```
import { createRoot } from "react-dom/client"
import React from "react"

const root = createRoot(document.getElementById("root"))

function TodoItem(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>Status: {props.status}</p>
    </li>
  )
}

function Page() {
  const todos = [
    { title: "Full Stack Development", status: "In Progress" },
    { title: "Mobile App Development", status: "To Do" }
  ]

  return (
    <div>
      <h1>Fullstack To-Do App</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} title={todo.title} status={todo.status} />
        ))}
      </ul>
    </div>
  )
}

root.render(<Page />)
```