import { useEffect, useState } from "react";

export function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // setup code
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // cleanup code
    return () => clearInterval(interval);
  }, []); // dependency array

  return { currentTime };
}
