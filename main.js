function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`username: ${username}, password: ${password}`);

    setUsername("");
    setPassword("");

    // const formData = new FormData(event.target);
    // const username = formData.get("username")
    // const password = formData.get("password")
  }

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        {/* input.id binding with label.for */}
        {/* input.name is used for form data */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
