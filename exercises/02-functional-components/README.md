# Get Started
1. In your terminal, type `cd exercises/02-functional-components`
2. type `npm create vite@latest functional-components --template`
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
```