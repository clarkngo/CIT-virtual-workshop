# Get Started
1. In your terminal, type `cd exercises/01-hello-world`
2. type `npm create vite@latest hello-world --template`
3. press `y`
4. keep pressing down arrow until `React` is highlighted and press Enter
5. keep pressing down arrow until `JavaScript` is highlighted and press Enter
6. `cd functional-components`
7. `npm install`
8. `npm run dev`

Notes: 
- `npm` node package manager to streamline incorporating external code to your environment
- `cd` let's you change directories
- `npm install` install dependencies defined in `package.json`
- `npm run dev` runs the script `dev` in `package.json`

# Activity - Hello World with HTML
1. Delete `id="root"` inside the `<div>` tags in `index.html`
2. Add `<h1>Hello World<h1>`

# Activity - Hello World with React
1. Delete the contents of main.jsx
2. Replace with
```
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(<h1>Hello World</h1>)
```