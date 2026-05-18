function TextColor({ textColor, setTextColor }) {
  return (
    <>
      <label>
        text color
        <select
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        >
          <option value="">White</option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>
    </>
  );
}

export default TextColor;
