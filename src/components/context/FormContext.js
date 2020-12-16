import React, { createContext, useState } from "react";
import App from "../../App";

export const FormContext = createContext();

const FormContextProvider = () => {
  const [count, setCount] = useState(1);
  const [state, setState] = useState([]);
  const [finalState, setFinalState] = useState([]);

  const submitData = () => {
    setFinalState((finalState) => [...finalState, state]);
    if (count !== 3) {
      setCount(count + 1);
    } else {
      setState("");
      setCount(1);
    }
  };
  const submitSkip = () => {
    setCount(count + 1);
    setFinalState((finalState) => [...finalState, state]);
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
