function PasswordInput({ password, setPassword, passwordClass }) {
  return (
    <>
      <label htmlFor="password">Password</label>
      <input
        className={passwordClass}
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}

export default PasswordInput;
