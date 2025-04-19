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
