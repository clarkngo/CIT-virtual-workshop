import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Page() {
  return (
    <div>
      <h1>Fullstack To-Do App</h1>
      <ul>
        <li>Full Stack Development</li>
        <li>Mobile App Development</li>
        <li>AI-Powered App Development</li>
      </ul>
    </div>
  )
}

root.render(
  <Page />
)