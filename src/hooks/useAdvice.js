import { useEffect } from "react";
import { useState } from "react";

export function useAdvice() {
  const [advice, setAdvice] = useState("Advice ...");
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);

    // https://api.adviceslip.com/
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip.advice);
    setIsLoading(false);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return { advice, isLoading, getAdvice };
}
