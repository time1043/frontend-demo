/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function App() {
  const [todoText, setTodoText] = React.useState("");
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Angular", completed: false },
    { id: 3, text: "Learn Vue", completed: false },
    { id: 4, text: "Learn Svelte", completed: true },
  ]);
  const isTodosVisible = todos && todos.length > 0;

  function sortTodos(newTodos) {
    // const completedTodos = newTodos.filter((todo) => todo.completed);
    // const uncompletedTodos = newTodos.filter((todo) => !todo.completed);
    // setTodos([...uncompletedTodos, ...completedTodos]);
    setTodos(
      newTodos.sort((o1, o2) => {
        if (o1.completed !== o2.completed) return o1.completed ? 1 : -1;
        return o1.id - o2.id;
        // return 0;
      }),
    );
  }

  function handleAddTodo() {
    if (todoText.trim() === "") return;

    const newTodo = { id: Date.now(), text: todoText, completed: false };
    const newTodos = [...todos, newTodo];
    sortTodos(newTodos);

    setTodoText("");
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggleCompleteTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      else return todo;
    });
    sortTodos(newTodos);
  }

  return (
    <main>
      <h1>React Todo List</h1>

      <input
        type="text"
        placeholder="Add item into as todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {isTodosVisible &&
          todos?.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleteTodo(todo.id)}
              />
              {todo.text}
              <button
                disabled={todo.completed}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                delete
              </button>
            </li>
          ))}
        {!isTodosVisible && <p>There are no todos</p>}
      </ul>
    </main>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
