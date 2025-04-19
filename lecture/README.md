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
