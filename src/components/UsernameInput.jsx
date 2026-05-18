function UsernameInput({ username, setUsername, usernameClass }) {
  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        className={usernameClass}
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}

export default UsernameInput;
