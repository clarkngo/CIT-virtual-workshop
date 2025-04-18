# Get Started
1. type `npm create vite@latest functional-components --template`
2. press `y`
3. keep pressing down arrow until `React` is highlighted and press Enter
4. keep pressing down arrow until `JavaScript` is highlighted and press Enter
5. cd functional-components
6. npm install
7. npm run dev

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