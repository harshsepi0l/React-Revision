import { useCounter } from "../customHooks/useCounter";

export const Counter = () => {
  const { counter, increaseCounter, decreaseCounter, zeroCounter } =
    useCounter();

  return (
    <div>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={zeroCounter}>Set to Zero</button>

      <div>Counter: {counter}</div>
    </div>
  );
};
