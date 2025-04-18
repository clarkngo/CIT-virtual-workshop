# Get Started
1. In your terminal, type `cd exercises/03-props`
2. type `npm create vite@latest props --template`
3. press `y`
4. keep pressing down arrow until `React` is highlighted and press Enter
5. keep pressing down arrow until `JavaScript` is highlighted and press Enter
6. `cd functional-components`
7. `npm install`
8. `npm run dev`

# Activity - Functional Components with React
1. Delete the contents of `main.jsx`
2. Replace with
```
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
```