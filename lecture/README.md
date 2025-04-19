# Root - Hello World
- Create a root
- Render some markup to the root
* The HTML sets up the basic skeleton of the page.
* The style.css defines how things should look.
* The index.jsx defines what should appear and how it should behave.

```
<div id="root"></div>
```
This is an empty div that acts as a mounting point for JavaScript frameworks like React. The entire app will be rendered inside this div by JavaScript.

```
<script src="src/index.jsx"></script> 
```
Loads your JavaScript app (most likely a React app) from the file src/index.jsx.
    * index.jsx contains the code that tells React to render components inside #root.



# JSX as syntactic sugar

JavaScript object
``` 
import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Hello from createElement!")

console.log(reactElement)

root.render(
    reactElement
)
```

## Alternative
```
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

console.log(reactElement)

root.render(
    reactElement
)
```

# State

Without useState → You're writing on a piece of paper, and no one is watching you.
With useState → You're writing on a live camera feed, and React is watching — as soon as you write something new, it updates the screen automatically.


🪨 Without useState, your app becomes static
If you store your todos in a regular variable like this:
```
const todos = ["Buy milk", "Do laundry"]
```
React will render that list once, when the component loads. But here’s the catch:
🔄 If the user adds a new todo, the screen won’t update. ✏️ Changing todos.push("New item") won’t make React re-render the list. 🧠 Because React doesn’t "know" anything changed.
React doesn’t watch regular variables. It only watches state and props. That’s how it knows when to re-render a component.

✅ With useState, React reacts
```
const [todos, setTodos] = useState([])
```
Now:
* React remembers the value.
* When you call setTodos([...todos, "New item"]), React:
    * Updates the value
    * 🚀 Re-renders the UI
