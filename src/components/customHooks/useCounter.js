import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [counter, setCounter] = useState(initialVal);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const zeroCounter = () => {
    setCounter(0);
  };

  return { counter, increaseCounter, decreaseCounter, zeroCounter };
};
