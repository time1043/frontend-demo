function CircleProperty({ property, setProperty, children }) {
  return (
    <>
      <label>
        {children}
        <input
          type="number"
          value={property}
          onChange={(e) => setProperty(Number(e.target.value))}
        />
      </label>
    </>
  );
}

export default CircleProperty;
