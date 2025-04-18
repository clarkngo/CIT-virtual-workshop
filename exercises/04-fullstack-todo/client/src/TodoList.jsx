function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => toggleTodo(todo._id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    )
  }
  
  export default TodoList