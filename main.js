function App() {
  // State
  // TLDR: The state changed trigger element updated
  const [text, setText] = React.useState("react");

  return (
    <>
      <h1>React Implementation</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
