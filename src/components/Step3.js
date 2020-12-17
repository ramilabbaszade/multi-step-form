import React, { useState, useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FormContext } from "./context/FormContext";

import "./Step3.css";

const Step3 = () => {
  const { state, setState } = useContext(FormContext);

  const checkboxs = [
    { id: 1, isChecked: false, name: "checkedA", value: "Single family" },
    {
      id: 2,
      isChecked: false,
      name: "checkedB",
      value: "Residential multifamily",
    },
    { id: 3, isChecked: true, name: "checkedC", value: "Commercial retail" },
    {
      id: 4,
      isChecked: false,
      name: "checkedD",
      value: "Commercial industrial",
    },
    {
      id: 5,
      isChecked: false,
      name: "checkedE",
      value: "Commercial hospitality",
    },
    {
      id: 6,
      isChecked: true,
      name: "checkedF",
      value: "Commercial warehousing",
    },
    { id: 7, isChecked: false, name: "checkedG", value: "Commercial office" },
    { id: 8, isChecked: false, name: "checkedK", value: "Other" },
  ];
  const [name, setName] = useState([])

  const handleChange = (event) => {
      let data = name;
      data.push(event.target.value);
      setName(data)
      setState({...state, checkboxes:name})
  };
  return (
    <div>
      <h2>Investment preferences</h2>
      <p className="low-color">
        This will help us figure out what your investment options are so that we
        can show you only possibly intresting for you deals
      </p>
      <h3>What kind of real estate are you interested in?</h3>
      <div className="checkboxs_group">
        {checkboxs.map((option, index) => {
          return (
            <div key={option.id} className="checkbox_container">
              <Checkbox
                key={option.name}
                name={option.value}
                value={option.value}
                onChange={(e)=> handleChange(e)}
                style={{ color: "#35A0EE" }}
              />
              <label htmlFor="check"> {option.value} </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
