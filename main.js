function Header() {
  return <h2>Welcome to My React App</h2>;
}

function App() {
  // React allow only return one element
  // Otherwise it needs to wrap it into a fragment
  return (
    <>
      <Header />
      <p>Welcome fellas..</p>
    </>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
