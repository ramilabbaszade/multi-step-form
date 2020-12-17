import React, { createContext, useState } from "react";
import App from "../../App";

export const FormContext = createContext();

const FormContextProvider = () => {
  const [count, setCount] = useState(1);
  const [state, setState] = useState([]);
  const [finalState, setFinalState] = useState([]);

  const submitData = () => {
    if (count !== 3) {
      setFinalState((finalState) => [...finalState, state]);
      setCount(count + 1);
    } else if(count === 3) {
      setFinalState((finalState) => [...finalState, state]);
      console.log(finalState)
      setCount(1);
      alert(JSON.stringify(finalState))
    }
  };
  const submitSkip = () => {
    setFinalState((finalState) => [...finalState, state]);
    setCount(count + 1);
  };
  return (
    <FormContext.Provider
      value={{ state, setState, submitData, count, setCount, submitSkip }}
    >
      <App />
    </FormContext.Provider>
  );
};

export default FormContextProvider;
