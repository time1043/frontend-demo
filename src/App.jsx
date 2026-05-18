import { useAdvice } from "./hooks/useAdvice";
import { useCurrentTime } from "./hooks/useCurrentTime";

export default function App() {
  const { advice, isLoading, getAdvice } = useAdvice();
  const { currentTime } = useCurrentTime();

  return (
    <main>
      <h1>Advice App</h1>
      <span>{currentTime}</span>
      <p>{isLoading ? "Loading..." : advice}</p>
      <button onClick={getAdvice} disabled={isLoading}>
        Get Advice
      </button>
    </main>
  );
}
