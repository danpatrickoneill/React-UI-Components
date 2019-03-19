import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />

      <ActionButton className="btn clear-btn" symbol="clear" />
      <ActionButton className="btn divide-btn" symbol="÷" />
      <ActionButton className="btn multiply-btn" symbol="x" />
      <ActionButton className="btn subtract-btn" symbol="-" />
      <ActionButton className="btn add-btn" symbol="+" />
      <ActionButton className="btn equals-btn" symbol="=" />
      <NumberButton className="btn" number="1" />
      <NumberButton className="btn" number="2" />
      <NumberButton className="btn" number="3" />
      <NumberButton className="btn" number="4" />
      <NumberButton className="btn" number="5" />
      <NumberButton className="btn" number="6" />
      <NumberButton className="btn" number="7" />
      <NumberButton className="btn" number="8" />
      <NumberButton className="btn" number="9" />
      <NumberButton className="btn zero-btn" number="0" />
    </div>
  );
};

export default App;
