import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function TodoItem(props) {
  return(
    <li>
      <h3>{props.title}</h3>
      <p>Status: {props.status}</p>
    </li>
  )
}

function Page() {
  return (
    <div>
      <h1>Fullstack To-Do App</h1>
      <ul>
        <TodoItem title="Full Stack Development" status="In Progress" />
        <TodoItem title="Mobile App Development" status="To Do" />
      </ul>
    </div>
  )
}

root.render(
  <Page />
)