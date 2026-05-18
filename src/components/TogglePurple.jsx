function TogglePurple({ isPurple, setIsPurple }) {
  return (
    <>
      <label>
        Purple
        <input
          type="checkbox"
          checked={isPurple}
          onChange={() => setIsPurple((isPurple) => !isPurple)}
          // onChange={(e) => setIsPurple(e.target.checked)}
        />
      </label>
    </>
  );
}

export default TogglePurple;
