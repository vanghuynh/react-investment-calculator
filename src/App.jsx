import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header userInput={userInput} />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      {!isInputValid && (
        <p className="center">Please input duration greater than zoro.</p>
      )}
      {isInputValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
