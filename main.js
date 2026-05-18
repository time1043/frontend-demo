function App() {
  // Normal variable
  let text = "react";

  // When the input changes, value and text are updated.
  // But p tag is not updated.
  // TLDR: Normal variable could not binding with text value of element
  function handleChange(event) {
    const { value } = event.target;
    text = value;
    console.log({ value, text });
  }

  return (
    <>
      <h1>React Implementation</h1>
      <input type="text" onChange={handleChange} />
      <p>{text}</p>
    </>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
