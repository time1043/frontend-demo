import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import UsernameInput from "./components/UsernameInput";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isUsernameValid = username.length >= 3;
  const isPasswordValid = password.length >= 6;

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
        {/* <UsernameInput username={username} setUsername={setUsername} usernameClass={usernameClass} /> */}
        {/* <PasswordInput password={password} setPassword={setPassword} passwordClass={passwordClass} /> */}

        {/* ES6 destructuring: {...props} */}
        <UsernameInput {...{ username, setUsername, usernameClass }} />
        <PasswordInput {...{ password, setPassword, passwordClass }} />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
