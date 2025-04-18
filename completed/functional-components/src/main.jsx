import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Page() {
  return (
    <div>
      <h1>Fullstack To-Do App</h1>
      <ul>
        <li>
          <h3>Full Stack Development</h3>
          <p>Status: In Progress</p>
        </li>
        <li>
          <h3>AI-Powered App Development</h3>
          <p>Status: To Do</p>
        </li>
      </ul>
    </div>
  )
}

root.render(
  <Page />
)