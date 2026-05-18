function App() {
  const [submitted, setSubmitted] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isUsernameValid = username.length >= 3;
  const isPasswordValid = password.length >= 6;

  // computed based on state - derived state
  const usernameClass = isUsernameValid || !submitted ? "" : "input-error";
  const passwordClass = isPasswordValid || !submitted ? "" : "input-error";

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    // validation
    if (!isUsernameValid || !isPasswordValid)
      return alert("Invalid username or password");

    // mock submission
    alert(`username: ${username}, password: ${password}`);

    // reset
    setUsername("");
    setPassword("");
    setSubmitted(false);
  }

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className={usernameClass}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          className={passwordClass}
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
