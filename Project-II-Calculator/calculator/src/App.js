import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />

      <ActionButton buttonStyle="btn clear-btn" text="clear" />
      <ActionButton buttonStyle="btn divide-btn" text="÷" />
      <ActionButton buttonStyle="btn multiply-btn" text="x" />
      <ActionButton buttonStyle="btn subtract-btn" text="-" />
      <ActionButton buttonStyle="btn add-btn" text="+" />
      <ActionButton buttonStyle="btn equals-btn" text="=" />
      {numbers.map(number => (
        <NumberButton
          key={number.toString() + "button"}
          buttonStyle="btn"
          text={number}
        />
      ))}
      {/* <NumberButton buttonStyle="btn" text="1" />
      <NumberButton buttonStyle="btn" text="2" />
      <NumberButton buttonStyle="btn" text="3" />
      <NumberButton buttonStyle="btn" text="4" />
      <NumberButton buttonStyle="btn" text="5" />
      <NumberButton buttonStyle="btn" text="6" />
      <NumberButton buttonStyle="btn" text="7" />
      <NumberButton buttonStyle="btn" text="8" />
      <NumberButton buttonStyle="btn" text="9" /> */}
      <ActionButton buttonStyle="btn zero-btn" text="0" />
    </div>
  );
};

export default App;
